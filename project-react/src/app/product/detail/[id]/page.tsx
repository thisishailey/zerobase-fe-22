import { getProductData } from '@/api/products';
import type IProduct from '@/types/productData';

export async function generateStaticParams() {
    const products: IProduct[] = await getProductData();

    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div className="min-h-screen">
            <main className="p-10">
                <h2>This is a detail page of product {id}.</h2>
            </main>
        </div>
    );
}
