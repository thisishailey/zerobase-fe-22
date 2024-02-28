import Link from 'next/link';
import NavButton from '../common/NavButton';
import SearchBar from '../common/SearchBar';

const isLoggedIn = false;

export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between h-20 px-10 shadow dark:shadow-md">
            <div className="flex-1 basis-0">
                <NavButton>Menu</NavButton>
            </div>
            <h1 className="text-xl font-medium">
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
