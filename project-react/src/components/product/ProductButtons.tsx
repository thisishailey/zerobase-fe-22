'use client';

import Link from 'next/link';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCartStore } from '@/stores/cartStore';
import { useCheckoutStore } from '@/stores/checkoutStore';
import type IProduct from '@/types/productData';

export function AddCartButton({ item }: { item: IProduct }) {
    const { cart, addItem } = useCartStore();
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const addToCart = (item: IProduct) => {
        if (cart.some((i) => i.id === item.id)) {
            openModal();
        } else {
            addItem(item);
            showCart();
        }
    };

    const showCart = () => {
        const button = document.querySelector(
            '.cart-popover-button'
        ) as HTMLButtonElement;
        button.click();
    };

    return (
        <>
            <button
                className="btn flex-1 min-w-24 h-auto py-3 text-base sm:text-lg text-white font-normal shadow-md border-0 bg-blue-700 hover:bg-blue-800 transition-all duration-300"
                onClick={() => addToCart(item)}
            >
                Add to cart
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-80 transform overflow-hidden rounded-2xl bg-white dark:!bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium"
                                    >
                                        Already in the cart
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            This item is already in your cart.
                                            <br />
                                            You can change the quantity in the
                                            cart.
                                        </p>
                                    </div>

                                    <div className="flex justify-between gap-3 mt-4">
                                        <Link
                                            href={'/cart'}
                                            type="button"
                                            className="flex-1 inline-flex justify-center rounded-md bg-blue-700 px-4 py-2.5 text-base font-normal text-white hover:bg-blue-800 transition-all duration-300"
                                            onClick={closeModal}
                                        >
                                            Go to cart
                                        </Link>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-transparent px-3 py-2.5 text-base font-normal text-blue-700 hover:!bg-blue-100 dark:hover:!bg-neutral-900 transition-all duration-300"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export function PurchaseButton({ item }: { item: IProduct }) {
    const { setCheckout } = useCheckoutStore();

    return (
        <Link
            href={'/checkout'}
            className="btn flex-1 min-w-24 h-auto py-3 text-base sm:text-lg !text-blue-700 font-medium shadow-md !border-blue-700 bg-white dark:!bg-transparent hover:!bg-blue-100 dark:hover:!bg-black transition-all duration-300"
            onClick={() => {
                setCheckout([{ ...item, qty: 1 }]);
            }}
        >
            Purchase
        </Link>
    );
}
