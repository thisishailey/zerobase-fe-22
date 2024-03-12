import { Suspense } from 'react';
import Loading from '@/app/loading';
import Products from '@/components/_product/_category/Products';
import type ICategoryParams from '@/types/category';

export default function ProductsSortByDateDesc({ params }: ICategoryParams) {
    return (
        <Suspense fallback={<Loading />}>
            <Products param={params.category} sort={'date-desc'} />
        </Suspense>
    );
}
