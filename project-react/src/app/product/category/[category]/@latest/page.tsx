import Products from '@/components/product/Products';
import type { CategoryPageParams } from '../page';

export default function ProductsSortByDateDesc({ params }: CategoryPageParams) {
    return <Products param={params.category} sort={'date-desc'} />;
}
