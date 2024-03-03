'use client';

import { useEffect, useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { THEME_LS_KEY } from '@/constants/keys/theme';

export default function DarkModeButton({ classList }: { classList?: string }) {
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

    const toggleDarkMode = (e: React.MouseEvent) => {
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
            onClick={toggleDarkMode}
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
