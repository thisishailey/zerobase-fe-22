import Link from 'next/link';
import { getProductData } from '@/api/products';
import type IProduct from '@/types/productData';
import ProductImage from '../common/ProductImage';
import {
    TrashIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';

export default async function CartItem({ itemId }: { itemId: number }) {
    const product: IProduct = await getProductData(itemId);
    const qty = 2;

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
                <button className="w-4">
                    <ChevronUpIcon />
                </button>
                <p>{qty}</p>
                <button className="w-4">
                    <ChevronDownIcon />
                </button>
            </td>
            <td className="text-center px-2">${product.price.toFixed(2)}</td>
            <td className="text-center px-2">
                ${(product.price * qty).toFixed(2)}
            </td>
            <td className="px-2">
                <button className="w-5">
                    <TrashIcon />
                </button>
            </td>
        </tr>
    );
}
