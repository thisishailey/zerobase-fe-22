'use client';

import { useCheckoutStore } from '@/stores/checkoutStore';
import { useOrderStore } from '@/stores/orderStore';
import { useCartStore } from '@/stores/cartStore';
import OrderSummary from '@/components/common/OrderSummary';

export default function CheckoutSummary() {
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
        <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            href="/checkout/success"
            hasItems={true}
            items={checkout}
            isOrderComplete={false}
            onClick={handleOrderComplete}
        />
    );
}
