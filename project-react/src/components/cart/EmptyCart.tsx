import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function EmptyCart() {
    const arrowBounceEffect = (add: boolean) => {
        add
            ? document
                  .querySelector('.arrow-icon')
                  ?.classList.add('animate-[arrowBounce_800ms_infinite]')
            : document
                  .querySelector('.arrow-icon')
                  ?.classList.remove('animate-[arrowBounce_800ms_infinite]');
    };

    return (
        <div className="flex flex-col items-center py-10">
            <h3 className="mb-10 text-lg sm:text-xl">The cart is empty.</h3>
            <Link
                href={'/product/all'}
                className="flex items-center p-3 px-4 text-xl font-medium text-blue-600 bg-gray-100 dark:bg-black shadow rounded-lg border-1 border-gray-200 dark:border-neutral-700 transition-all duration-300 hover:text-white dark:hover:text-blue-700 hover:bg-blue-700 dark:hover:bg-white"
                onMouseOver={() => arrowBounceEffect(true)}
                onMouseLeave={() => arrowBounceEffect(false)}
            >
                Explore products
                <FaArrowRightLong
                    className="inline w-5 ml-3 arrow-icon"
                    onMouseOver={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                />
            </Link>
        </div>
    );
}
