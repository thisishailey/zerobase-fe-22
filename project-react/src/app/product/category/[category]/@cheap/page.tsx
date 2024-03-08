import Products from '@/components/product/Products';
import type { CategoryPageParams } from '../page';

export default function ProductsSortByPriceAsc({ params }: CategoryPageParams) {
    return <Products param={params.category} sort={'price-asc'} />;
}
