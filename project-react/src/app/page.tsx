import Page from '@/components/common/template/Page';
import Carousel from '@/components/home/Carousel';
import Wrap from '@/components/common/template/Wrap';
import Section from '@/components/home/Section';
import { getProductsData } from '@/api/products';
import type Product from '@/types/productData';

export default async function HomePage() {
    const data = await getProductsData();

    const newProducts: Product[] = data.slice(0, 3);
    const bestProducts: Product[] = data.slice(3, 6);
    const saleProducts: Product[] = data.slice(6, 9);

    const sectionList = [
        { id: 'new', title: 'New Arrivals', products: newProducts },
        { id: 'best', title: 'Best Sellers', products: bestProducts },
        { id: 'sale', title: 'Sale', products: saleProducts },
    ];

    return (
        <Page>
            <Carousel />
            <Wrap classList="min-h-screen px-10 pt-10 lg:pt-14 pb-16 lg:pb-20">
                {sectionList.map((section) => {
                    return (
                        <Section
                            title={section.title}
                            products={section.products}
                            key={section.id}
                        />
                    );
                })}
            </Wrap>
        </Page>
    );
}
