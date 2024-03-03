import Page from '@/components/common/template/page';
import CarouselBanner from '@/components/home/CarouselBanner';
import Wrap from '@/components/common/template/wrap';
import HomeSection from '@/components/home/template/section';
import { getProductData } from '@/api/products';
import type Product from '@/types/productData';

export default async function Home() {
    const data = await getProductData();

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
            <CarouselBanner />
            <Wrap classList="min-h-screen px-10 pt-10 lg:pt-14 pb-16 lg:pb-20">
                {sectionList.map((section) => {
                    return (
                        <HomeSection
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
