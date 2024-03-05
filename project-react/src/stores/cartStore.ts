import { createStore } from 'zustand';

export interface ICartItem {
    id: number;
    qty: number;
}

export type CartState = {
    cart: ICartItem[];
};

export type CartActions = {
    addItem: (id: number) => void;
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
        addItem: (id: number) =>
            set((state) => ({
                cart: state.cart.concat({ id: id, qty: 1 }),
            })),
        updateItem: {
            decrementQty: (id: number) =>
                set((state) => ({
                    cart: state.cart.map((item) => {
                        if (item.id === id) {
                            if (item.qty === 1) {
                                return;
                            } else {
                                return { ...item, qty: item.qty - 1 };
                            }
                        } else {
                            return item;
                        }
                    }) as ICartItem[],
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
