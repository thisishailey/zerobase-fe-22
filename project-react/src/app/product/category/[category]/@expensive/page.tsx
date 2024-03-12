import { Suspense } from 'react';
import Loading from '@/app/loading';
import Products from '@/components/_product/_category/Products';
import type ICategoryParams from '@/types/category';

export default function ProductsSortByPriceDesc({ params }: ICategoryParams) {
    return (
        <Suspense fallback={<Loading />}>
            <Products param={params.category} sort={'price-desc'} />
        </Suspense>
    );
}
