'use client';

import { useState } from 'react';
import Page from '@/components/common/template/page';
import Wrap from '@/components/common/template/wrap';
import Sort from '@/components/product/Sort';
import { SmallSort } from '@/components/product/Sort';
import type { TSortOption } from '@/types/sortOption';
// import Products from '@/components/product/Products';

export default function Product() {
    const [sortOption, setSortOption] = useState<TSortOption>('new');

    const changeSortOption = (id: TSortOption) => {
        setSortOption(id);
    };

    return (
        <Page classList="py-10 px-4">
            <Wrap classList="flex justify-between flex-col md:flex-row">
                <div className="w-1/5 text-sm hidden md:block">
                    <Sort
                        sortOption={sortOption}
                        changeSortOption={changeSortOption}
                    />
                </div>
                <div className="block md:hidden flex justify-end">
                    <SmallSort
                        sortOption={sortOption}
                        changeSortOption={changeSortOption}
                    />
                </div>
                <div className="w-full md:w-4/5">{/* <Products /> */}</div>
            </Wrap>
            <div className="h-12 mb-10"></div>
        </Page>
    );
}
