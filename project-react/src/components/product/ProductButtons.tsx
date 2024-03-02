'use client';

export function AddCartButton() {
    const addToCart = () => {};

    return (
        <button
            className="flex-1 min-w-28 py-3 text-base shadow-md rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-400 bg-[#ffffff] dark:bg-neutral-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
            onClick={addToCart}
        >
            Add to Cart
        </button>
    );
}

export function PurchaseButton() {
    const purchaseProduct = () => {};

    return (
        <button
            className="flex-1 min-w-28 py-3 text-base shadow-md rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-400 bg-[#ffffff] dark:bg-neutral-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
            onClick={purchaseProduct}
        >
            Purchase
        </button>
    );
}
