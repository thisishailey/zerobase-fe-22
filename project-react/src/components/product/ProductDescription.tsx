'use client';

import { useRef } from 'react';
import { GoPlus } from 'react-icons/go';

interface DescProps {
    description: string;
}

export default function ProductDescription({ description }: DescProps) {
    const infoRef = useRef(null);
    const plusRef = useRef(null);

    const toggleInfo = () => {
        const infoP = infoRef.current! as HTMLParagraphElement;
        const plusSVG = plusRef.current! as SVGSVGElement;
        infoP.classList.toggle('hidden');
        plusSVG.classList.toggle('rotate-45');
    };

    return (
        <>
            <p className="hidden sm:block text-sm lg:text-base p-3 shadow-inner rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-700 bg-[#ffffff] dark:bg-neutral-800">
                {description}
            </p>
            <div className="block sm:hidden w-full min-w-60 rounded-lg border-1 border-solid border-gray-300 dark:border-neutral-600 bg-[#ffffff] dark:bg-neutral-800">
                <button
                    className="block sm:hidden flex items-center justify-between w-full p-1.5 px-3 text-base"
                    onClick={toggleInfo}
                >
                    Product Info
                    <span ref={plusRef}>
                        <GoPlus className="inline text-xl" />
                    </span>
                </button>
                <p
                    ref={infoRef}
                    className="hidden w-full p-2 px-3 text-sm border-t border-solid border-gray-300 dark:border-neutral-600"
                    onClick={toggleInfo}
                >
                    {description}
                </p>
            </div>
        </>
    );
}
