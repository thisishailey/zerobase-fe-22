'use client';

import { useCartStore } from '@/providers/cartStoreProvider';

export function AddCartButton({ itemId }: { itemId: number }) {
    const { cart, addItem, updateItem } = useCartStore((state) => state);

    const addToCart = (id: number) => {
        if (cart.some((item) => item.id === id)) {
            updateItem.incrementQty(id);
        } else {
            addItem(id);
        }
        console.log(cart);
    };

    return (
        <button
            className="flex-1 min-w-24 py-3 text-base shadow-md rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-400 bg-[#ffffff] dark:bg-neutral-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
            onClick={() => addToCart(itemId)}
        >
            Add to Cart
        </button>
    );
}

export function PurchaseButton() {
    const { cart, emptyCart } = useCartStore((state) => state);

    const purchaseProduct = () => {
        emptyCart();
        console.log(cart);
    };

    return (
        <button
            className="flex-1 min-w-24 py-3 text-base shadow-md rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-400 bg-[#ffffff] dark:bg-neutral-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
            onClick={purchaseProduct}
        >
            Purchase
        </button>
    );
}
