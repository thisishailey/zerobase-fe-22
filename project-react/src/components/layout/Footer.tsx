import { HiOutlineMail } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-6 p-10 text-sm shadow-inner dark:bg-neutral-600">
            <div className="flex items-start justify-between w-full p-8 border-b border-solid ">
                <div>
                    <h4 className="mb-3 font-semibold">About Us</h4>
                    <ul>
                        <li className="mb-1 cursor-pointer">Our Story</li>
                        <li className="mb-1 cursor-pointer">News</li>
                        <li className="mb-1 cursor-pointer">GitHub</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 font-semibold">Products</h4>
                    <ul>
                        <li className="mb-1 cursor-pointer">All</li>
                        <li className="mb-1 cursor-pointer">Latest</li>
                        <li className="mb-1 cursor-pointer">Trending</li>
                        <li className="mb-1 cursor-pointer">Clothes</li>
                        <li className="mb-1 cursor-pointer">Accessories</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-3 font-semibold">Support</h4>
                    <ul>
                        <li className="mb-1 cursor-pointer">Get Help</li>
                        <li className="mb-1 cursor-pointer">
                            Shipping and Delivery
                        </li>
                        <li className="mb-1 cursor-pointer">
                            Returns and Cancellations
                        </li>
                        <li className="mb-1 cursor-pointer">FAQ</li>
                    </ul>
                </div>
                <div className="mx-20">
                    <h3 className="mb-3 font-semibold text-lg text-center">
                        Contact Us
                    </h3>
                    <ul>
                        <li className="mb-1">
                            <HiOutlineMail className="inline" />
                            <span className="pl-4">mystore@gmail.com</span>
                        </li>
                        <li className="mb-1">
                            <FaXTwitter className="inline" />
                            <span className="pl-4">mystore_official</span>
                        </li>
                        <li className="mb-1">
                            <FaInstagram className="inline" />
                            <span className="pl-4">mystore_onlineshopping</span>
                        </li>
                        <li className="mb-1">
                            <IoCallOutline className="inline" />
                            <span className="pl-4">032-1515-3300</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-between w-full p-2 m-4 text-xs">
                <div>
                    <span>© 2024 MyStore, Inc. All Rights Reserved.</span>
                </div>
                <div className="flex gap-6">
                    <span className="cursor-pointer">Guide</span>
                    <span className="cursor-pointer">Terms & Conditions</span>
                    <span className="cursor-pointer">Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
}
