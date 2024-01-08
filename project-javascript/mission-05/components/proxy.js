const newCategory = new Proxy(
    { category: 'all' },
    {
        set(obj, prop, val) {
            return obj[prop] = val;
        }
    }
);

export default newCategory;