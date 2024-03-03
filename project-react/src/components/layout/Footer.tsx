import Wrap from '../common/template/wrap';
import { HiOutlineMail } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

export default function Footer() {
    return (
        <>
            <div className="h-[445px] lg:h-[490px] invisible"></div>
            <footer className="fixed bottom-0 left-0 right-0 z-0 shadow-inner bg-gray-100 dark:bg-black">
                <Wrap classList="flex flex-col items-center gap-12 pt-14 pb-14 lg:pb-20 px-8 lg:px-12">
                    <div className="flex items-start justify-center sm:justify-between w-full text-sm lg:p-6 !pb-12 border-b border-solid border-neutral-400">
                        <div className="hidden sm:block">
                            <h4 className="mb-3 font-semibold">About Us</h4>
                            <ul>
                                <li className="mb-1 cursor-pointer">
                                    Our Story
                                </li>
                                <li className="mb-1 cursor-pointer">News</li>
                                <li className="mb-1 cursor-pointer">GitHub</li>
                            </ul>
                        </div>
                        <div className="hidden sm:block">
                            <h4 className="mb-3 font-semibold">Products</h4>
                            <ul>
                                <li className="mb-1 cursor-pointer">All</li>
                                <li className="mb-1 cursor-pointer">Latest</li>
                                <li className="mb-1 cursor-pointer">
                                    Trending
                                </li>
                                <li className="mb-1 cursor-pointer">Clothes</li>
                                <li className="mb-1 cursor-pointer">
                                    Accessories
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <h4 className="mb-3 font-semibold">Support</h4>
                            <ul>
                                <li className="mb-1 cursor-pointer">
                                    Get Help
                                </li>
                                <li className="mb-1 cursor-pointer">
                                    Shipping and Delivery
                                </li>
                                <li className="mb-1 cursor-pointer">
                                    Returns and Cancellations
                                </li>
                                <li className="mb-1 cursor-pointer">FAQ</li>
                            </ul>
                        </div>
                        <div className="sm:ml-6 sm:mr-12 lg:ml-10 lg:mr-20">
                            <h3 className="mb-3 font-semibold text-lg text-center">
                                Contact Us
                            </h3>
                            <ul>
                                <li className="mb-1">
                                    <HiOutlineMail className="inline" />
                                    <span className="pl-4">
                                        mystore@gmail.com
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <FaXTwitter className="inline" />
                                    <span className="pl-4">
                                        mystore_official
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <FaInstagram className="inline" />
                                    <span className="pl-4">
                                        mystore_onlineshopping
                                    </span>
                                </li>
                                <li className="mb-1">
                                    <IoCallOutline className="inline" />
                                    <span className="pl-4">032-1515-3300</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full text-xs">
                        <div>
                            <span>
                                © 2024 MyStore, Inc. All Rights Reserved.
                            </span>
                        </div>
                        <div className="hidden sm:flex !gap-4 md:!gap-6 lg:!gap-8">
                            <span className="cursor-pointer">Guide</span>
                            <span className="cursor-pointer">
                                Terms & Conditions
                            </span>
                            <span className="cursor-pointer">
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                </Wrap>
            </footer>
        </>
    );
}
