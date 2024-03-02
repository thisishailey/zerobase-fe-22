'use client';

import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function ProductCard({ id, title, price, image }: CardProps) {
    return (
        <div className="flex flex-col w-full cursor-pointer hover:text-blue-700 dark:hover:text-white dark:hover:underline decoration-1">
            <Link href={`/product/detail/${id}`}>
                <div className="relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 my-4 rounded-lg border border-solid border-neutral-50 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg dark:brightness-[0.85] dark:hover:brightness-100">
                    <Image
                        loader={() => image}
                        unoptimized={true}
                        src={image}
                        alt={title}
                        fill={true}
                        sizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-contain p-8"
                    />
                </div>
                <div>
                    <h3 className="text-xs md:text-sm lg:text-base xl:text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap pr-6 mb-2">
                        {title}
                    </h3>
                    <span className="text-xs md:text-sm lg:text-base">
                        ${price.toFixed(2)}
                    </span>
                </div>
            </Link>
        </div>
    );
}
