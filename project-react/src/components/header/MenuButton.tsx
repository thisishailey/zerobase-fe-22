'use client';

import { useRef } from 'react';
import NavButton from './NavButton';
import MenuPanel from './MenuPanel';
import { FiMenu } from 'react-icons/fi';

export default function MenuButton() {
    const menuRef = useRef(null);

    const toggleMenu = () => {
        const menu = menuRef.current! as HTMLDivElement;
        const menuPanel = menu.querySelector(
            '.menu-side-panel'
        ) as HTMLDivElement;

        if (menuPanel.classList.contains('hidden')) {
            menuPanel.classList.remove('hidden');
            document.addEventListener('click', bodyClickHandler);
        } else {
            menuPanel.classList.add('hidden');
            document.removeEventListener('click', bodyClickHandler);
        }
    };

    const bodyClickHandler = (e: Event) => {
        const menu = menuRef.current! as HTMLDivElement;
        let target = e.target as HTMLElement | null;

        while (target) {
            if (target === menu) {
                return;
            } else {
                target = target.parentElement;
            }
        }

        toggleMenu();
    };

    return (
        <div ref={menuRef}>
            <NavButton
                classList="flex items-center py-1.5"
                onClick={toggleMenu}
            >
                <FiMenu className="inline" />
                <span className="pl-2">Menu</span>
            </NavButton>
            <MenuPanel onClick={toggleMenu} />
        </div>
    );
}
