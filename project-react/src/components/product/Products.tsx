import { getProductData } from '@/api/products';
import ProductCard from '@/components/common/ProductCard';
import type IProduct from '@/types/productData';
import type { TProductSort } from '@/types/sortOption';

export default async function Products({ sort }: { sort: TProductSort }) {
    const products: IProduct[] = await getProductData();

    switch (sort) {
        case 'date-desc':
            break;

        case 'price-desc':
            products.sort((x, y) => y.price - x.price);
            break;

        case 'price-asc':
            products.sort((x, y) => x.price - y.price);
            break;

        default:
            break;
    }

    return (
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {products.map((product) => {
                return (
                    <ProductCard
                        id={product.id}
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
