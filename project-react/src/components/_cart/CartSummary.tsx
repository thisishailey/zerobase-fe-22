'use client';

import { useCheckoutStore } from '@/stores/checkoutStore';
import OrderSummary from '@/components/common/OrderSummary';
import type ICartItem from '@/types/cartItem';

export default function CartSummary({ cart }: { cart: ICartItem[] }) {
    const { setCheckout } = useCheckoutStore();

    const subtotal = cart.reduce((acc, cur) => {
        return cur.price * cur.qty + acc;
    }, 0);
    const shipping = 5;
    const tax = subtotal * 0.07;
    const total = subtotal + shipping + tax;

    return (
        <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            href="/checkout"
            hasItems={false}
            onClick={() => setCheckout(cart, true)}
            isOrderComplete={false}
        />
    );
}
