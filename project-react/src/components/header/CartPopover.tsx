'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useCartStore } from '@/stores/cartStore';
import ProductImage from '../common/ProductImage';
import { EmptyCartButton } from '../cart/EmptyCart';

export default function CartPopover({ href }: { href: string }) {
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
                                        href={href}
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
