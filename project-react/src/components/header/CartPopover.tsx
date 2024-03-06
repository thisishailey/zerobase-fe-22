'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function CartPopover({ href }: { href: string }) {
    return (
        <Popover className="relative">
            <Popover.Button className="p-2.5 text-lg rounded-full outline-0 transition hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40">
                <HiOutlineShoppingBag />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute right-0 translate-x-14 sm:translate-x-4 z-10 w-80 mt-2 ">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative grid gap-8 bg-white dark:!bg-neutral-800 p-7 lg:grid-cols-2">
                            {/* {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))} */}
                        </div>
                        <div className="flex justify-center p-3 bg-gray-100 dark:bg-neutral-900">
                            <Popover.Button
                                as={Link}
                                href={href}
                                className="w-60 py-2 rounded-lg bg-blue-600 text-center text-lg text-white transfrom-all duration-300 hover:bg-blue-700"
                            >
                                Go to cart
                            </Popover.Button>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
