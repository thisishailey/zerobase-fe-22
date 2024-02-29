import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import bakery from '@/assets/bakery.jpg';
import beverages from '@/assets/beverages.jpg';
import books from '@/assets/books.jpg';
import grocery from '@/assets/grocery.jpg';
import mall from '@/assets/mall.jpg';
import shopping from '@/assets/shopping.jpg';

export default function CarouselBanner() {
    return (
        <>
            <div className="w-full max-h-[600px] mt-1 bg-neutral-400">
                <Carousel className="w-full h-full" pause={'hover'}>
                    <CarouselItem>
                        <Image
                            src={bakery}
                            alt={'bakery'}
                            height={600}
                            priority
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={beverages} alt={'beverages'} height={600} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={books} alt={'books'} height={600} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={grocery} alt={'grocery'} height={600} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={mall} alt={'mall'} height={600} />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={shopping} alt={'shopping'} height={600} />
                    </CarouselItem>
                </Carousel>
            </div>
        </>
    );
}
