import Link from 'next/link';
import Wrap from '../common/template/wrap';
import NavButton from '../header/NavButton';
import MenuButton from '../header/MenuButton';
import DarkModeButton from '../header/DarkModeButton';
import SearchBar from '../header/SearchBar';
import CartPopover from '../header/CartPopover';
import { VscAccount } from 'react-icons/vsc';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 sm:px-10 border-b border-solid border-gray-300 bg-gray-50 dark:border-neutral-600 dark:bg-neutral-900">
            <Wrap classList="flex justify-between">
                <div className="hidden sm:flex flex-1 basis-0 items-center md:gap-1">
                    <MenuButton />
                    <DarkModeButton />
                </div>
                <h1 className="flex items-center text-xl font-semibold">
                    <Link href={'/'}>MY STORE</Link>
                </h1>
                <ul className="flex-1 basis-0 flex items-center justify-end gap-0.5 md:gap-2">
                    <li className="hidden lg:block">
                        <SearchBar
                            isHeader={true}
                            classList="w-60 py-1 pr-2.5 pl-3.5"
                            inputClassList="text-base placeholder:text-sm"
                        />
                    </li>
                    <li className="hidden sm:block">
                        <NavButton href={'/account'}>
                            <VscAccount />
                        </NavButton>
                    </li>
                    <li className="block sm:hidden">
                        <DarkModeButton />
                    </li>
                    <li>
                        <CartPopover href={'/cart'} />
                    </li>
                    <li className="block sm:hidden">
                        <MenuButton />
                    </li>
                </ul>
            </Wrap>
        </header>
    );
}
