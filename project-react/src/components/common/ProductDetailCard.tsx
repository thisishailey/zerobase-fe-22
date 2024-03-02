import ProductImage from './ProductImage';

interface CardProps {
    // id: number;
    // title: string;
    // price: number;
    // image: string;
}

export default function ProductDetailCard() {
    return (
        <div className="flex flex-col w-full cursor-pointer hover:text-blue-700 dark:hover:text-white dark:hover:underline decoration-1">
            {/* <Link href={`/product/detail/${id}`}>
            <ProductImage
                image={image}
                title={title}
                classList="transition-all duration-300 hover:shadow-lg dark:brightness-[0.85] dark:hover:brightness-100"
            />
            <div>
                <h3 className="text-xs md:text-sm lg:text-base xl:text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap pr-6 mb-2">
                    {title}
                </h3>
                <span className="text-xs md:text-sm lg:text-base">
                    ${price.toFixed(2)}
                </span>
            </div>
        </Link> */}
        </div>
    );
}
