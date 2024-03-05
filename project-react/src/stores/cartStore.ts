import { createStore } from 'zustand';
import type IProduct from '@/types/productData';

export interface ICartItem extends IProduct {
    qty: number;
}

export type CartState = {
    cart: ICartItem[];
};

export type CartActions = {
    addItem: (item: IProduct) => void;
    updateItem: {
        decrementQty: (id: number) => void;
        incrementQty: (id: number) => void;
    };
    removeItem: (id: number) => void;
    emptyCart: () => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
    cart: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
    return createStore<CartStore>()((set) => ({
        ...initState,
        addItem: (item: IProduct) =>
            set((state) => ({
                cart: state.cart.concat({ ...item, qty: 1 }),
            })),
        updateItem: {
            decrementQty: (id: number) =>
                set((state) => ({
                    cart: state.cart.map((item) => {
                        if (item.id === id) {
                            return { ...item, qty: item.qty - 1 };
                        } else {
                            return item;
                        }
                    }),
                })),
            incrementQty: (id: number) =>
                set((state) => ({
                    cart: state.cart.map((item) => {
                        if (item.id === id) {
                            return { ...item, qty: item.qty + 1 };
                        } else {
                            return item;
                        }
                    }),
                })),
        },
        removeItem: (id: number) =>
            set((state) => ({
                cart: state.cart.filter((item) => item.id !== id),
            })),
        emptyCart: () => set(initState),
    }));
};
