export default function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between p-5 px-10 border-b border-solid border-zinc-600">
            <div className="flex-1 basis-0">menu</div>
            <h1 className="text-xl font-medium">MY STORE</h1>
            <ul className="flex-1 basis-0 flex justify-end gap-8">
                <li>search</li>
                <li>account</li>
                <li>cart</li>
            </ul>
        </header>
    );
}
