import { getProductData } from '@/api/products';
import type IProduct from '@/types/productData';
import ProductCard from '@/components/common/template/productCard';

export default async function Products() {
    const products: IProduct[] = await getProductData();

    return (
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {products.map((product) => {
                return (
                    <ProductCard
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        key={product.id}
                    />
                );
            })}
        </div>
    );
}
