'use client';

import { useOrderStore } from '@/stores/orderStore';
import OrderSummary from '../common/OrderSummary';

export default function OrderCompleteSummary() {
    const { order } = useOrderStore();
    const currentOrder = order[order.length - 1];
    const orderItems = currentOrder.orderItems;

    const subtotal = orderItems.reduce((acc, cur) => {
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
            hasItems={true}
            items={orderItems}
            isOrderComplete={true}
            orderId={currentOrder.orderId}
        />
    );
}
