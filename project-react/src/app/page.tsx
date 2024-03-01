import CarouselBanner from '@/components/home/CarouselBanner';
import ContentWrap from '@/components/common/ContentWrap';
import NewArrivals from '@/components/home/NewArrivals';
import BestSellers from '@/components/home/BestSellers';
import Sale from '@/components/home/Sale';

export default function Home() {
    return (
        <main className="relative top-16 min-h-screen">
            <CarouselBanner />
            <ContentWrap>
                <NewArrivals />
                <BestSellers />
                <Sale />
            </ContentWrap>
        </main>
    );
}
