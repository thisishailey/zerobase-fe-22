import Link from 'next/link';
import NavButton from '../header/NavButton';
import MenuButton from '../header/MenuButton';
import DarkModeButton from '../header/DarkModeButton';
import SearchBar from '../header/SearchBar';

const isLoggedIn = false;

export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between h-16 px-10 z-10 shadow bg-neutral-100 dark:bg-[#444444]">
            <div className="flex-1 basis-0 flex items-center gap-4">
                <MenuButton />
                <DarkModeButton />
            </div>
            <h1 className="text-xl font-semibold">
                <Link href={'/'}>MY STORE</Link>
            </h1>
            <ul className="flex-1 basis-0 flex items-center justify-end gap-4">
                <li>
                    <SearchBar isHeader={true} />
                </li>
                <li>
                    <NavButton href={'/account'}>
                        {isLoggedIn ? 'Account' : 'Log In'}
                    </NavButton>
                </li>
                <li>
                    <NavButton href={'/cart'}>Cart</NavButton>
                </li>
            </ul>
        </header>
    );
}
