import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';

export default function MenuPanel({ onClick }: { onClick: () => void }) {
    return (
        <>
            <div className="absolute top-[1vh] left-[1vh] flex flex-col justify-between w-[35vw] max-w-sm h-[98vh] rounded-xl bg-zinc-500/95 dark:bg-neutral-800/95 text-neutral-50 dark:text-neutral-300 hidden menu-side-panel">
                <div className="flex justify-end p-4 text-2xl">
                    <IoCloseOutline
                        className="cursor-pointer"
                        onClick={onClick}
                    />
                </div>
                <div className="flex flex-col gap-10 p-10 text-3xl">
                    <div className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/'} onClick={onClick}>
                            Home
                        </Link>
                    </div>
                    <div className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/product'} onClick={onClick}>
                            Products
                        </Link>
                    </div>
                    <div className="transition-all duration-300 hover:text-4xl">
                        <Link href={'/account'} onClick={onClick}>
                            Log In
                        </Link>
                    </div>
                </div>
                <div className="p-4 text-center text-sm">
                    © 2024 MyStore, Inc. All rights reserved.
                </div>
            </div>
        </>
    );
}
