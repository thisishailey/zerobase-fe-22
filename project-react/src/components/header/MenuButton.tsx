'use client';

import NavButton from './NavButton';
import MenuPanel from './MenuPanel';
import { FiMenu } from 'react-icons/fi';

export default function MenuButton() {
    const openSidePanel = () => {
        const sidePanel = document.querySelector(
            '.menu-side-panel'
        ) as HTMLDivElement;
        sidePanel.classList.remove('hidden');
    };

    const closeSidePanel = () => {
        const sidePanel = document.querySelector(
            '.menu-side-panel'
        ) as HTMLDivElement;
        sidePanel.classList.add('hidden');
    };

    return (
        <div>
            <NavButton
                classList="flex items-center sm:py-1.5"
                onClick={openSidePanel}
            >
                <FiMenu className="inline sm:pr-1" />
                <span className="hidden sm:inline text-base">Menu</span>
            </NavButton>
            <MenuPanel onClick={closeSidePanel} />
        </div>
    );
}
