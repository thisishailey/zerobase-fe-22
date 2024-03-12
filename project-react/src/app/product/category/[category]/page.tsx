import { Suspense } from 'react';
import Loading from '@/app/loading';
import { getCategoryDict, convertParamToCategory } from '@/api/productCategory';
import type ICategoryParams from '@/types/category';

export async function generateStaticParams() {
    const categories = await getCategoryDict();
    const params = Object.values(categories).map((category) => ({
        category: category,
    }));

    return params;
}

export default async function ProductCategoryPage({ params }: ICategoryParams) {
    let category = await convertParamToCategory(params.category);
    if (category === 'all') {
        category = 'all products';
    }

    return (
        <Suspense fallback={<Loading />}>
            <h2 className="text-2xl font-semibold capitalize">{category}</h2>
        </Suspense>
    );
}
