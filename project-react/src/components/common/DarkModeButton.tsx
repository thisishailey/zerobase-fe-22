'use client';

import { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

export default function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <button
            className="p-2 rounded-full transition hover:bg-neutral-300/20"
            onClick={toggleDarkMode}
        >
            {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
    );
}
