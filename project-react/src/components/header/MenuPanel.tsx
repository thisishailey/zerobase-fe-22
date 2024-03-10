'use client';

import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import SearchBar from './SearchBar';

export default function MenuPanel({ onClick }: { onClick: () => void }) {
    const categories = [
        'all',
        'electronics',
        'jewelery',
        "men's clothing",
        "women's clothing",
    ];

    const toggleList = () => {
        const list = document.querySelector('.product-category-list');
        if (list?.classList.contains('hidden')) {
            list?.classList.remove('hidden');
        } else {
            list?.classList.add('hidden');
        }
    };

    const closeList = () => {
        const list = document.querySelector('.product-category-list');
        list?.classList.add('hidden');
    };

    const closePanel = () => {
        closeList();
        onClick();
    };

    return (
        <div className="hidden menu-side-panel">
            <div
                className="fixed inset-0 bg-black/30"
                aria-hidden="true"
                onClick={closePanel}
            />
            <div className="absolute top-[1vh] right-[1vh] sm:left-[1vh] flex flex-col justify-between w-[96vw] sm:w-[50vw] lg:w-[40vw] max-w-md h-[98vh] rounded-xl font-medium text-white bg-gray-400/90 dark:bg-neutral-700/95 backdrop-blur-lg">
                <div className="flex flex-col w-full">
                    <div className="flex justify-end p-4 text-2xl">
                        <IoCloseOutline
                            className="cursor-pointer"
                            onClick={closePanel}
                        />
                    </div>
                    <div className="w-full">
                        <SearchBar
                            isHeader={false}
                            classList="w-4/5 min-w-52 max-w-96 py-2 px-3 my-0 mx-auto"
                            inputClassList="text-lg placeholder:text-base"
                        />
                    </div>
                </div>
                <ul className="flex flex-col gap-10 p-14 text-3xl">
                    <li className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/'} onClick={closePanel}>
                            Home
                        </Link>
                    </li>
                    <li
                        className="transition-all duration-300 hover:text-4xl"
                        onClick={toggleList}
                    >
                        <span className="cursor-pointer">Products</span>
                        <ul className="flex flex-col gap-4 pt-4 pl-4 text-xl hidden product-category-list">
                            {categories.map((category) => (
                                <li
                                    className="transition-all duration-300 hover:text-2xl"
                                    key={category}
                                >
                                    <Link
                                        href={`/product/category/${category}`}
                                        onClick={closePanel}
                                        className="capitalize"
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/account'} onClick={closePanel}>
                            Account
                        </Link>
                    </li>
                </ul>
                <div className="p-4 text-center font-normal text-xs sm:text-sm">
                    © 2024 MyStore, Inc. All rights reserved.
                </div>
            </div>
        </div>
    );
}
