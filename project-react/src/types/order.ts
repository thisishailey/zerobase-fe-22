import type ICartItem from '@/types/cartItem';

export default interface IOrder {
    orderId: string;
    orderItems: ICartItem[];
}
