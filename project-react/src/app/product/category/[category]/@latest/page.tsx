import { Suspense } from 'react';
import Loading from '@/components/common/template/Loading';
import Products from '@/components/_product/_category/Products';
import type ICategoryParams from '@/types/category';

export default function ProductsSortByDateDesc({ params }: ICategoryParams) {
    return (
        <Suspense fallback={<Loading />}>
            <Products param={params.category} sort={'date-desc'} />
        </Suspense>
    );
}
