'use client';

import { useCartStore } from '@/providers/cartStoreProvider';
import type IProduct from '@/types/productData';

export function AddCartButton({ item }: { item: IProduct }) {
    const { cart, addItem, updateItem } = useCartStore((state) => state);

    const addToCart = (item: IProduct) => {
        if (cart.some((i) => i.id === item.id)) {
            updateItem.incrementQty(item.id);
        } else {
            addItem(item);
        }
        console.log(cart);
    };

    return (
        <button
            className="flex-1 min-w-24 py-3 text-base shadow-md rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-400 bg-[#ffffff] dark:bg-neutral-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
            onClick={() => addToCart(item)}
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
