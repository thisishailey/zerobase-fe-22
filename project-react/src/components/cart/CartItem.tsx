'use client';

import Link from 'next/link';
import { getProductData } from '@/api/products';
import type IProduct from '@/types/productData';
import type { ICartItem } from '@/stores/cartStore';
import ProductImage from '../common/ProductImage';
import {
    TrashIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';

interface CartItemProps {
    item: ICartItem;
    increment: (id: number) => void;
    decrement: (id: number) => void;
    removeItem: (id: number) => void;
}

export default async function CartItem({
    item,
    increment,
    decrement,
    removeItem,
}: CartItemProps) {
    const product: IProduct = await getProductData(item.id);
    const qty = item.qty;

    return (
        <tr className="text-sm h-24">
            <td className="px-2">
                <Link
                    className="flex w-16"
                    href={'/product/detail/' + product.id}
                >
                    <ProductImage
                        image={product.image}
                        title={product.title}
                        classList="h-16"
                        imgClassList="p-2"
                    />
                </Link>
            </td>
            <td className="max-w-42">
                <Link href={'/product/detail/' + product.id}>
                    <p className="h-10 text-ellipsis overflow-hidden">
                        {product.title}
                    </p>
                </Link>
            </td>
            <td className="text-center h-24 flex flex-col items-center justify-evenly">
                <button className="w-4" onClick={() => increment(item.id)}>
                    <ChevronUpIcon />
                </button>
                <p>{qty}</p>
                <button className="w-4">
                    <ChevronDownIcon onClick={() => decrement(item.id)} />
                </button>
            </td>
            <td className="text-center px-2">${product.price.toFixed(2)}</td>
            <td className="text-center px-2">
                ${(product.price * qty).toFixed(2)}
            </td>
            <td className="px-2">
                <button className="w-5" onClick={() => removeItem(item.id)}>
                    <TrashIcon />
                </button>
            </td>
        </tr>
    );
}
