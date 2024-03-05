import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function EmptyCart() {
    const arrowBounceEffect = (add: boolean) => {
        add
            ? document
                  .querySelector('.arrow-icon')
                  ?.classList.add('animate-[arrowBounce_800ms]')
            : document
                  .querySelector('.arrow-icon')
                  ?.classList.remove('animate-[arrowBounce_800ms]');
    };

    return (
        <div className="flex flex-col items-center py-10">
            <h3 className="mb-10 text-lg sm:text-xl">The cart is empty.</h3>
            <Link
                href={'/product/all'}
                className="flex items-center p-3 px-4 text-xl font-normal rounded-lg text-blue-700 dark:text-white bg-white dark:!bg-blue-700 shadow-md transition-all duration-300 hover:text-[22px]"
                onMouseOver={() => arrowBounceEffect(true)}
                onMouseLeave={() => arrowBounceEffect(false)}
            >
                Explore products
                <ArrowRightIcon
                    className="inline w-5 ml-3 arrow-icon"
                    onMouseOver={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                />
            </Link>
        </div>
    );
}
