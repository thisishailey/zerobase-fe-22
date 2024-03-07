import Wrap from '@/components/common/template/wrap';
import { getProductsData, getProductData } from '@/api/products';
import type IProduct from '@/types/productData';
import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';
import ProductDetailCard from '@/components/product/ProductDetailCard';

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
            <div className="h-20"></div>
        </Wrap>
    );
}
