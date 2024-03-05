'use client';

import Link from 'next/link';
import { useCartStore } from '@/providers/cartStoreProvider';
import ProductImage from '../common/ProductImage';
import OrderSummary from '@/components/cart/OrderSummary';
import EmptyCart from './EmptyCart';
import {
    TrashIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';

export default function CartTable() {
    const { cart, updateItem, removeItem } = useCartStore((state) => state);

    function CartItems() {
        return (
            <>
                {cart.map((item) => {
                    return (
                        <tr className="text-sm h-24" key={item.id}>
                            <td className="px-2">
                                <Link
                                    className="flex w-16"
                                    href={'/product/detail/' + item.id}
                                >
                                    <ProductImage
                                        image={item.image}
                                        title={item.title}
                                        classList="h-16"
                                        imgClassList="p-2"
                                    />
                                </Link>
                            </td>
                            <td className="max-w-42">
                                <Link href={'/product/detail/' + item.id}>
                                    <p className="h-10 text-ellipsis overflow-hidden">
                                        {item.title}
                                    </p>
                                </Link>
                            </td>
                            <td className="text-center h-24 flex flex-col items-center justify-evenly">
                                <button
                                    className="w-4"
                                    onClick={() =>
                                        updateItem.incrementQty(item.id)
                                    }
                                >
                                    <ChevronUpIcon />
                                </button>
                                <p>{item.qty}</p>
                                <button className="w-4">
                                    <ChevronDownIcon
                                        onClick={() => {
                                            if (item.qty === 1) {
                                                removeItem(item.id);
                                            } else {
                                                updateItem.decrementQty(
                                                    item.id
                                                );
                                            }
                                        }}
                                    />
                                </button>
                            </td>
                            <td className="hidden sm:table-cell text-center px-2">
                                ${item.price.toFixed(2)}
                            </td>
                            <td className="text-center px-2">
                                ${(item.price * item.qty).toFixed(2)}
                            </td>
                            <td className="px-2">
                                <button
                                    className="w-5"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <TrashIcon />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </>
        );
    }

    return (
        <>
            {cart.length > 0 ? (
                <>
                    <table className="w-full">
                        <thead className="border-b border-gray-300 dark:border-neutral-600">
                            <tr className="text-sm h-12">
                                <th className="font-medium pl-3">Item</th>
                                <th className="font-medium"></th>
                                <th className="font-medium text-center">
                                    Quantity
                                </th>
                                <th className="hidden sm:table-cell font-medium text-center">
                                    Price
                                </th>
                                <th className="font-medium text-center">
                                    Total
                                </th>
                                <th className="font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="border-b border-gray-300 dark:border-neutral-600">
                            <CartItems />
                        </tbody>
                    </table>
                    <OrderSummary />
                </>
            ) : (
                <EmptyCart />
            )}
        </>
    );
}
