'use client';

import Image from 'next/image';

interface ItemProps {
    title: string;
    price: number;
    image: string;
}

export default function HomeSectionItem({ title, price, image }: ItemProps) {
    return (
        <div className="flex flex-col w-[32%] cursor-pointer">
            <div className="relative w-full h-96 my-4 rounded-lg border border-solid border-neutral-50 bg-white overflow-hidden transition-all duration-300 hover:shadow-md dark:brightness-90 dark:hover:brightness-100">
                <Image
                    loader={() => image}
                    unoptimized={true}
                    src={image}
                    alt={title}
                    fill={true}
                    className="object-contain p-16"
                />
            </div>
            <div>
                <h3 className="text-md font-medium text-ellipsis overflow-hidden whitespace-nowrap pr-6 mb-2">
                    {title}
                </h3>
                <span className="">${price.toFixed(2)}</span>
            </div>
        </div>
    );
}
