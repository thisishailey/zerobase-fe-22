import Wrap from '@/components/common/template/wrap';
import { getProductsData } from '@/api/products';
import type IProduct from '@/types/productData';
import ProductDetailCard from '@/components/common/ProductDetailCard';

export async function generateStaticParams() {
    const products: IProduct[] = await getProductsData();

    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <Wrap>
            <ProductDetailCard id={id} />
            <div className="h-20"></div>
        </Wrap>
    );
}
