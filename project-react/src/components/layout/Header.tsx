import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between p-5 px-10 border-b border-solid border-zinc-600">
            <div className="flex-1 basis-0">
                <button>menu</button>
            </div>
            <h1 className="text-xl font-medium">
                <Link href={'/'}>MY STORE</Link>
            </h1>
            <ul className="flex-1 basis-0 flex justify-end gap-8">
                <li>
                    <Link href={'/search'}>search</Link>
                </li>
                <li>
                    <Link href={'/account'}>account</Link>
                </li>
                <li>
                    <Link href={'/cart'}>cart</Link>
                </li>
            </ul>
        </header>
    );
}
