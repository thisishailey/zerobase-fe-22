import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import bakery from '@/assets/bakery.jpg';
import beverages from '@/assets/beverages.jpg';
import books from '@/assets/books.jpg';
import grocery from '@/assets/grocery.jpg';
import mall from '@/assets/mall.jpg';

export default function CarouselBanner() {
    const carouselItems = [bakery, beverages, books, grocery, mall];

    return (
        <>
            <div className="w-full max-h-[600px] mt-1 bg-neutral-400">
                <Carousel className="w-full h-full" pause={'hover'}>
                    {carouselItems.map((item, i) => {
                        return (
                            <>
                                <CarouselItem>
                                    <Image
                                        className="my-0 mx-auto"
                                        src={item}
                                        alt={'carousel item'}
                                        height={600}
                                        priority={i === 0}
                                    />
                                </CarouselItem>
                            </>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
}
