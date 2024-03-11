import Products from '@/components/_product/Products';
import type { CategoryPageParams } from '../page';

export default function ProductsSortByPriceDesc({
    params,
}: CategoryPageParams) {
    return <Products param={params.category} sort={'price-desc'} />;
}
