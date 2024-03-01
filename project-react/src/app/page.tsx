import CarouselBanner from '@/components/home/CarouselBanner';
import ContentWrap from '@/components/common/ContentWrap';

export default function Home() {
    return (
        <main className="min-h-screen">
            <CarouselBanner />
            <ContentWrap></ContentWrap>
        </main>
    );
}
