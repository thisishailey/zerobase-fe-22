'use client';

import { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { THEME_LS_KEY } from '@/constants/keys/theme';

export default function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();

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

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem(THEME_LS_KEY, 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem(THEME_LS_KEY, 'dark');
        }

        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            className="p-2.5 rounded-full transition hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40"
            onClick={toggleDarkMode}
        >
            {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
    );
}
