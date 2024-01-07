const currentCategory = new Proxy(
    { category: 'all' },
    {
        set(obj, prop, val) {
            return obj[prop] = val;
        }
    }
);

export default currentCategory;