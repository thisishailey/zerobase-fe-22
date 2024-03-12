import { Suspense } from 'react';
import Loading from '@/components/common/template/Loading';
import Products from '@/components/_product/_category/Products';
import type ICategoryParams from '@/types/category';

export default function ProductsSortByPriceDesc({ params }: ICategoryParams) {
    return (
        <Suspense fallback={<Loading />}>
            <Products param={params.category} sort={'price-desc'} />
        </Suspense>
    );
}
