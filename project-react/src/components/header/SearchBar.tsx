'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import NavButton from './NavButton';

export default function SearchBar({ isHeader }: { isHeader: boolean }) {
    const [showButton, setShowButton] = useState(isHeader);

    const showSearchForm = () => {
        setShowButton(false);
    };

    const closeSearchForm = () => {
        setShowButton(true);
    };

    return (
        <>
            {showButton && (
                <NavButton onClick={showSearchForm}>
                    <FiSearch />
                </NavButton>
            )}
            <form
                className={
                    showButton
                        ? 'hidden'
                        : 'flex items-center justify-between w-60 p-1 px-2 pl-3 rounded-full border border-solid border-neutral-200 bg-neutral-200 hover:bg-neutral-50 transition'
                }
            >
                <input
                    className="flex-1 text-neutral-700 bg-transparent outline-0 placeholder:text-sm placeholder:text-neutral-500"
                    type="text"
                    name="search"
                    id=""
                    placeholder="Search products"
                    autoComplete="off"
                />
                {isHeader && (
                    <button
                        className="basis-0 text-neutral-500"
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
