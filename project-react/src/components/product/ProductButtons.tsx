'use client';

import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';
import { useCheckoutStore } from '@/stores/checkoutStore';
import type IProduct from '@/types/productData';

export function AddCartButton({ item }: { item: IProduct }) {
    const { cart, addItem, incrementQty } = useCartStore();

    const addToCart = (item: IProduct) => {
        if (cart.some((i) => i.id === item.id)) {
            incrementQty(item.id);
        } else {
            addItem(item);
        }
    };

    const showCart = () => {
        const button = document.querySelector(
            '.cart-popover-button'
        ) as HTMLButtonElement;
        button.click();
    };

    return (
        <button
            className="flex-1 min-w-24 py-3 text-base shadow-md rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-400 bg-[#ffffff] dark:bg-neutral-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
            onClick={() => {
                addToCart(item);
                showCart();
            }}
        >
            Add to Cart
        </button>
    );
}

export function PurchaseButton({ item }: { item: IProduct }) {
    const { setCheckout } = useCheckoutStore();

    return (
        <Link
            href={'/checkout'}
            className="flex-1 min-w-24 py-3 text-base text-center shadow-md rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-400 bg-[#ffffff] dark:bg-neutral-900 transition-all duration-500 hover:bg-blue-600 hover:text-white"
            onClick={() => {
                setCheckout([{ ...item, qty: 1 }]);
            }}
        >
            Purchase
        </Link>
    );
}
