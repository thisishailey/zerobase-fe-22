'use client';

import { useState } from 'react';
import Page from '@/components/common/template/page';
import Wrap from '@/components/common/template/wrap';
import Sort from '@/components/product/Sort';
import type { TSortOption } from '@/types/sortOption';
import { getProductData } from '@/api/products';
import type IProduct from '@/types/productData';
import ProductCard from '@/components/common/template/productCard';

export default async function Product() {
    const [sortOption, setSortOption] = useState<TSortOption>('new');

    const changeSortOption = (e: React.MouseEvent) => {
        const label = e.target as HTMLLabelElement;
        const id = label.htmlFor as TSortOption;
        setSortOption(id);
    };

    const products: IProduct[] = await getProductData();

    return (
        <Page classList="py-10 px-4">
            <Wrap classList="flex justify-between">
                <div className="w-1/5 text-sm">
                    <Sort
                        sortOption={sortOption}
                        onLabelClick={changeSortOption}
                    />
                </div>
                <div className="w-4/5">
                    <h2 className="text-2xl font-semibold">All Products</h2>
                    <div className="grid grid-cols-2">
                        {products.map((product) => {
                            return (
                                <ProductCard
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    key={product.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </Wrap>
        </Page>
    );
}
