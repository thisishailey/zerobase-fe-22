import Link from 'next/link';

interface NavButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export default function NavButton(props: NavButtonProps) {
    return (
        <>
            {props.href ? (
                <Link
                    href={props.href}
                    className="py-1 px-3 rounded-full transition hover:bg-neutral-300/20 navBtn"
                >
                    {props.children}
                </Link>
            ) : props.onClick ? (
                <button
                    className="py-1 px-3 rounded-full transition hover:bg-neutral-300/20 navBtn"
                    onClick={props.onClick}
                >
                    {props.children}
                </button>
            ) : (
                <button className="py-1 px-3 rounded-full transition hover:bg-neutral-300/20 navBtn">
                    {props.children}
                </button>
            )}
        </>
    );
}
