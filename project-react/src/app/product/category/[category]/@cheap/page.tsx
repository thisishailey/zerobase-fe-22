import Products from '@/components/_product/Products';
import type { CategoryPageParams } from '../page';

export default function ProductsSortByPriceAsc({ params }: CategoryPageParams) {
    return <Products param={params.category} sort={'price-asc'} />;
}
