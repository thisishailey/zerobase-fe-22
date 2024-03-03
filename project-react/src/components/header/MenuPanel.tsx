import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';
import SearchBar from './SearchBar';

export default function MenuPanel({ onClick }: { onClick: () => void }) {
    return (
        <>
            <div className="absolute top-[1vh] right-[1vh] sm:left-[1vh] flex flex-col justify-between w-[96vw] sm:w-[50vw] lg:w-[40vw] max-w-md h-[98vh] rounded-xl font-medium text-white bg-gray-400/90 dark:bg-neutral-700/95 backdrop-blur-lg hidden menu-side-panel">
                <div className="flex flex-col w-full">
                    <div className="flex justify-end p-4 text-2xl">
                        <IoCloseOutline
                            className="cursor-pointer"
                            onClick={onClick}
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
                <div className="flex flex-col gap-10 p-14 text-3xl">
                    <div className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/'} onClick={onClick}>
                            Home
                        </Link>
                    </div>
                    <div className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/product/all'} onClick={onClick}>
                            Products
                        </Link>
                    </div>
                    <div className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/account'} onClick={onClick}>
                            Log In
                        </Link>
                    </div>
                </div>
                <div className="p-4 text-center font-normal text-xs sm:text-sm">
                    © 2024 MyStore, Inc. All rights reserved.
                </div>
            </div>
        </>
    );
}
