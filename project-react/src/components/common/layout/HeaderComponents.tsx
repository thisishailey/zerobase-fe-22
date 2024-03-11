'use client';

import Link from 'next/link';
import { useEffect, useState, Fragment, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useCartStore } from '@/stores/cartStore';
import { useAccountStore } from '@/stores/accountStore';
import { logout } from '@/lib';
import ProductImage from '@/components/common/ProductImage';
import { EmptyCartButton } from '@/components/_cart/EmptyCart';
import { THEME_LS_KEY } from '@/constants/keys/theme';
import { CATEGORY } from '@/constants/category';
import { VscAccount } from 'react-icons/vsc';
import { IoCloseOutline } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FiMenu, FiSearch } from 'react-icons/fi';
import {
    MdOutlineLightMode,
    MdLightMode,
    MdOutlineDarkMode,
    MdDarkMode,
} from 'react-icons/md';

interface NavButtonProps {
    href?: string;
    onClick?: () => void;
    classList?: string;
    children: React.ReactNode;
}

function NavButton(props: NavButtonProps) {
    const defaultClasses =
        'block p-2.5 text-lg rounded-full transition hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 ';
    const additionalClasses = props.classList || '';

    const navButtonClasses = defaultClasses + additionalClasses;

    return (
        <>
            {props.href ? (
                <Link href={props.href} className={navButtonClasses}>
                    {props.children}
                </Link>
            ) : props.onClick ? (
                <button className={navButtonClasses} onClick={props.onClick}>
                    {props.children}
                </button>
            ) : (
                <button className={navButtonClasses}>{props.children}</button>
            )}
        </>
    );
}

export function ThemeButton({ classList }: { classList?: string }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();
    const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
    const [isToggled, setIsToggled] = useState<boolean>(false);

    useEffect(() => {
        const storageData = localStorage.getItem(THEME_LS_KEY);
        const darkPreference =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storageData) {
            if (storageData === 'light') {
                setIsDarkMode(false);
            } else {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            }
        } else if (darkPreference) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = (e: React.MouseEvent) => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem(THEME_LS_KEY, 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem(THEME_LS_KEY, 'dark');
        }

        setIsDarkMode(!isDarkMode);
        setIsMouseOver(false);
        setIsToggled(true);

        const button = e.currentTarget as HTMLButtonElement;
        button.classList.add('animate-[spinQuarter_300ms_linear_1]');
        setTimeout(() => {
            button.classList.remove('animate-[spinQuarter_300ms_linear_1]');
        }, 300);
    };

    const defaultClasses =
        'p-2.5 text-lg rounded-full transition hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 ';
    const additionalClasses = classList || '';
    const buttonClasses = defaultClasses + additionalClasses;

    return (
        <button
            className={buttonClasses}
            onClick={toggleTheme}
            onMouseOver={() => !isToggled && setIsMouseOver(true)}
            onMouseLeave={() => {
                setIsMouseOver(false);
                setIsToggled(false);
            }}
        >
            {isMouseOver ? (
                isDarkMode ? (
                    <MdLightMode />
                ) : (
                    <MdOutlineDarkMode />
                )
            ) : isDarkMode ? (
                <MdDarkMode />
            ) : (
                <MdOutlineLightMode />
            )}
        </button>
    );
}

interface SearchBarProps {
    isHeader: boolean;
    classList?: string;
    inputClassList?: string;
}

export function SearchBar({
    isHeader,
    classList,
    inputClassList,
}: SearchBarProps) {
    const [showButton, setShowButton] = useState(isHeader);

    const showSearchForm = () => {
        setShowButton(false);
    };

    const closeSearchForm = () => {
        setShowButton(true);
    };

    const defaultClasses =
        'flex items-center justify-between rounded-full border-1 border-solid border-neutral-400 bg-neutral-100 dark:bg-neutral-800 hover:bg-white dark:hover:bg-neutral-900 transition-all ';
    const additionalClasses = classList || '';
    const formClasses = defaultClasses + additionalClasses;

    const defaultInputClasses =
        'flex-1 font-normal text-neutral-900 dark:text-neutral-100 bg-transparent outline-0 placeholder:font-light placeholder:text-neutral-600 dark:placeholder:text-neutral-300 ';
    const additionalInputClasses = inputClassList || '';
    const inputClasses = defaultInputClasses + additionalInputClasses;

    return (
        <>
            {showButton && (
                <NavButton onClick={showSearchForm}>
                    <FiSearch />
                </NavButton>
            )}
            <form className={showButton ? 'hidden' : formClasses}>
                <input
                    className={inputClasses}
                    type="text"
                    name="search"
                    placeholder="Search products"
                    autoComplete="off"
                />
                {isHeader && (
                    <button
                        className="basis-0 text-neutral-600 dark:text-neutral-300"
                        type="button"
                        onClick={closeSearchForm}
                    >
                        <IoCloseOutline />
                    </button>
                )}
            </form>
        </>
    );
}

export function AccountButton() {
    const { user, getUser } = useAccountStore();

    return (
        <Popover className="relative">
            <Popover.Button
                className="p-2.5 text-lg rounded-full outline-0 transition hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40"
                onClick={async () => getUser()}
            >
                <VscAccount />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black/20 dark:bg-white/20" />
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute right-0 translate-x-16 z-10 w-40 mt-3">
                    {({ close }) => (
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                            <div className="p-3 bg-white dark:!bg-black">
                                {user ? (
                                    <div className="flex flex-col gap-2 w-full">
                                        <p className="text-sm">
                                            Logged in with{' '}
                                            <span className="font-medium">
                                                {user}
                                            </span>
                                        </p>
                                        <Link
                                            href={'/account'}
                                            onClick={() => close()}
                                            className="p-2 rounded-lg text-center text-white text-sm bg-blue-600 hover:bg-blue-700"
                                        >
                                            View Account
                                        </Link>
                                        <button
                                            onClick={async () => {
                                                logout();
                                                close();
                                            }}
                                            className="p-2 rounded-lg text-center text-blue-600 text-sm border-1 border-blue-600 hover:bg-blue-100"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-3 w-full">
                                        <Link
                                            href={'/account/login'}
                                            onClick={() => close()}
                                            className="p-2 rounded-lg text-center text-white text-lg bg-blue-600 hover:bg-blue-700"
                                        >
                                            Log In
                                        </Link>
                                        <hr className="text-neutral-400 opacity-100 text-center overflow-visible after:content-['or'] after:relative after:bottom-3 after:px-1 after:bg-white dark:after:!bg-black" />
                                        <Link
                                            href={'/account/signup'}
                                            onClick={() => close()}
                                            className="p-2 rounded-lg text-center text-blue-600 text-lg border-1 border-blue-600 hover:bg-blue-100"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export function CartButton() {
    const { cart } = useCartStore();

    return (
        <Popover className="relative">
            <Popover.Button className="p-2.5 text-lg rounded-full outline-0 transition hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 cart-popover-button">
                <HiOutlineShoppingBag />
                {cart.length > 0 && (
                    <div className="absolute bottom-0.5 right-0.5 px-1 text-xs font-medium rounded-full bg-gray-300 dark:bg-neutral-600">
                        {cart.length}
                    </div>
                )}
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black/20 dark:bg-white/20" />
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute right-0 translate-x-14 sm:translate-x-4 z-10 w-80 mt-3">
                    {({ close }) => (
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                            <ul className="relative p-2 bg-white dark:!bg-black">
                                {cart.length > 0 ? (
                                    cart.map((item) => (
                                        <Link
                                            href={`/product/detail/${item.id}`}
                                            onClick={() => close()}
                                            key={item.id}
                                        >
                                            <li className="flex items-center p-2 rounded-lg transition duration-200 hover:bg-gray-200/60 dark:hover:bg-neutral-800">
                                                <div className="flex items-center justify-center w-12 h-12 text-white">
                                                    <ProductImage
                                                        classList="w-12 h-12"
                                                        imgClassList="p-1"
                                                        image={item.image}
                                                        title={item.title}
                                                    />
                                                </div>
                                                <div className="!mx-3 w-48 text-sm">
                                                    <p className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                                                        {item.title}
                                                    </p>
                                                    <p>${item.price}</p>
                                                </div>
                                                <div className="w-6 font-light text-center text-sm text-gray-500 dark:text-neutral-300">
                                                    x {item.qty}
                                                </div>
                                            </li>
                                        </Link>
                                    ))
                                ) : (
                                    <li className="flex items-center p-2 py-3 rounded-lg">
                                        Your shopping cart is empty.
                                    </li>
                                )}
                            </ul>
                            <div className="flex p-3 bg-gray-100 dark:bg-neutral-900">
                                {cart.length > 0 ? (
                                    <Link
                                        href={'/cart'}
                                        onClick={() => close()}
                                        className="w-72 py-2.5 rounded-lg bg-blue-700 text-center text-lg text-white transfrom-all duration-300 hover:bg-blue-800"
                                    >
                                        Go to cart
                                    </Link>
                                ) : (
                                    <EmptyCartButton
                                        classList="w-72 text-lg"
                                        onClick={() => close()}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export function MenuButton() {
    const sidePanelRef = useRef<HTMLDivElement>(null);
    const productListRef = useRef<HTMLUListElement>(null);

    const openSidePanel = () => {
        const sidePanel = sidePanelRef.current as HTMLDivElement;
        sidePanel.classList.remove('hidden');
    };

    const closeSidePanel = () => {
        const sidePanel = sidePanelRef.current as HTMLDivElement;
        sidePanel.classList.add('hidden');
        closeList();
    };

    const toggleList = () => {
        const list = productListRef.current as HTMLUListElement;
        if (list.classList.contains('hidden')) {
            list.classList.remove('hidden');
        } else {
            list.classList.add('hidden');
        }
    };

    const closeList = () => {
        const list = productListRef.current as HTMLUListElement;
        list.classList.add('hidden');
    };

    return (
        <div>
            <NavButton
                classList="flex items-center sm:py-1.5"
                onClick={openSidePanel}
            >
                <FiMenu className="inline sm:pr-1" />
                <span className="hidden sm:inline text-base">Menu</span>
            </NavButton>
            <div ref={sidePanelRef} className="hidden">
                <div
                    className="fixed inset-0 bg-black/30"
                    aria-hidden="true"
                    onClick={closeSidePanel}
                />
                <div className="absolute top-[1vh] right-[1vh] sm:left-[1vh] flex flex-col justify-between w-[96vw] sm:w-[50vw] lg:w-[40vw] max-w-md h-[98vh] rounded-xl font-medium text-white bg-gray-400/90 dark:bg-neutral-700/95 backdrop-blur-lg">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-end p-4 text-2xl">
                            <IoCloseOutline
                                className="cursor-pointer"
                                onClick={closeSidePanel}
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
                            <Link href={'/'} onClick={closeSidePanel}>
                                Home
                            </Link>
                        </li>
                        <li
                            className="transition-all duration-300 hover:text-4xl"
                            onClick={toggleList}
                        >
                            <span className="cursor-pointer">Products</span>
                            <ul
                                ref={productListRef}
                                className="flex flex-col gap-4 pt-4 pl-4 text-xl hidden"
                            >
                                {CATEGORY.map((category) => (
                                    <li
                                        className="transition-all duration-300 hover:text-2xl"
                                        key={category}
                                    >
                                        <Link
                                            href={`/product/category/${category}`}
                                            onClick={closeSidePanel}
                                            className="capitalize"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="transition-all duration-300 hover:text-4xl">
                            <Link href={'/account'} onClick={closeSidePanel}>
                                Account
                            </Link>
                        </li>
                    </ul>
                    <div className="p-4 text-center font-normal text-xs sm:text-sm">
                        © 2024 MyStore, Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
