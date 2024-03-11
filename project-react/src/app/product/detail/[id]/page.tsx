import Wrap from '@/components/common/template/Wrap';
import { getProductsData, getProductData } from '@/api/products';
import ProductBreadcrumbs from '@/components/_product/_detail/Breadcrumbs';
import ProductDetailCard from '@/components/_product/_detail/DetailCard';
import type IProduct from '@/types/productData';

export async function generateStaticParams() {
    const products: IProduct[] = await getProductsData();

    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductDetail({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    const product: IProduct = await getProductData(id);

    return (
        <Wrap>
            <ProductBreadcrumbs
                category={product.category}
                name={product.title}
            />
            <ProductDetailCard product={product} />
        </Wrap>
    );
}
