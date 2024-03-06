'use client';

import Link from 'next/link';
import { useCheckoutStore } from '@/stores/checkoutStore';
import { useOrderStore } from '@/stores/orderStore';
import { useCartStore } from '@/stores/cartStore';

export default function OrderSummary({
    isOrderComplete = false,
}: {
    isOrderComplete?: boolean;
}) {
    const { checkout, fromCart, clearCheckout } = useCheckoutStore();
    const { addOrder } = useOrderStore();
    const { emptyCart } = useCartStore();

    const handleOrderComplete = () => {
        addOrder(checkout);
        clearCheckout();
        if (fromCart) {
            emptyCart();
        }
    };

    const subtotal = checkout.reduce((acc, cur) => {
        return cur.price * cur.qty + acc;
    }, 0);
    const shipping = 5;
    const tax = subtotal * 0.07;
    const total = subtotal + shipping + tax;

    return (
        <div className="flex flex-col gap-4 w-full md:w-1/3 h-96 md:mx-4 !px-6 !py-8 rounded-lg bg-gray-100 dark:bg-neutral-800">
            <h3 className="text-lg sm:text-xl font-normal pb-3 border-b border-gray-300 dark:border-neutral-500">
                Order Summary
            </h3>
            <ul>
                {checkout.map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
            <ul className="flex flex-col gap-2 text-sm sm:text-base font-light text-neutral-600 dark:text-neutral-300">
                <li className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </li>
                <li className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                </li>
                <li className="flex justify-between">
                    <span>Taxes</span>
                    <span>${tax.toFixed(2)}</span>
                </li>
            </ul>
            <div className="flex justify-between text-base sm:text-lg font-medium py-3 border-t border-b border-gray-300 dark:border-neutral-500">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            {!isOrderComplete && (
                <Link
                    href={'/checkout/success'}
                    onClick={handleOrderComplete}
                    className="py-3 rounded-xl text-center text-base text-white bg-blue-700 transition-all duration-300 hover:bg-blue-800 hover:text-lg"
                >
                    Pay ${total.toFixed(2)}
                </Link>
            )}
        </div>
    );
}
