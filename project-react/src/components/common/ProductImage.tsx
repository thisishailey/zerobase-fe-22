import Image from 'next/image';

interface ProductImageProps {
    image: string;
    title: string;
    classList?: string;
}

export default function ProductImage({
    image,
    title,
    classList,
}: ProductImageProps) {
    const defaultClasses =
        'relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 my-4 rounded-lg border border-solid border-neutral-50 bg-white overflow-hidden ';
    const additionalClasses = classList || '';

    const productImageClasses = defaultClasses + additionalClasses;

    return (
        <div className={productImageClasses}>
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
    );
}
