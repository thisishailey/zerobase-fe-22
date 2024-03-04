export const getProductsData = async () => {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
};

export const getProductData = async (id: number | string) => {
    const res = await fetch('https://fakestoreapi.com/products/' + id);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
};
