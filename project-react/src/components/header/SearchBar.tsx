'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import NavButton from './NavButton';

interface SearchBarProps {
    isHeader: boolean;
    classList?: string;
    inputClassList?: string;
}

export default function SearchBar({
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
