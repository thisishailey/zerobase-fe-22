import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type IOrder from '@/types/order';
import type ICartItem from '@/types/cartItem';
import OrderCode from 'ordercode';

type OrderState = {
    order: IOrder[];
    currentOrder: IOrder;
};

type OrderActions = {
    addOrder: (item: ICartItem[]) => void;
    clearOrderHistory: () => void;
};

type OrderStore = OrderState & OrderActions;

const defaultInitState: OrderState = {
    order: [],
    currentOrder: { orderId: '', orderItems: [] },
};

export const useOrderStore = create<OrderStore>()(
    persist(
        (set) => ({
            ...defaultInitState,
            addOrder: (item) => {
                const newOrder = {
                    orderId: OrderCode.generate(),
                    orderItems: item,
                };
                set((state) => ({
                    order: state.order.concat(newOrder),
                    currentOrder: newOrder,
                }));
            },
            clearOrderHistory: () => {
                set(defaultInitState);
            },
        }),
        { name: 'order' }
    )
);
