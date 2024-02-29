'use client';

import { useRef } from 'react';
import NavButton from './NavButton';
import MenuPanel from './MenuPanel';

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
            <NavButton onClick={toggleMenu}>Menu</NavButton>
            <MenuPanel onClick={toggleMenu} />
        </div>
    );
}
