import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type IOrder from '@/types/order';
import type ICartItem from '@/types/cartItem';
import OrderCode from 'ordercode';

type OrderState = {
    order: IOrder[];
};

type OrderActions = {
    addOrder: (item: ICartItem[]) => void;
    clearOrderHistory: () => void;
};

type OrderStore = OrderState & OrderActions;

const defaultInitState: OrderState = {
    order: [],
};

export const useOrderStore = create<OrderStore>()(
    persist(
        (set) => ({
            ...defaultInitState,
            addOrder: (item) =>
                set((state) => ({
                    order: state.order.concat({
                        orderId: OrderCode.generate(),
                        orderItems: item,
                    }),
                })),
            clearOrderHistory: () => {
                set(defaultInitState);
            },
        }),
        { name: 'order' }
    )
);
