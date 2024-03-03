import Link from 'next/link';

interface NavButtonProps {
    href?: string;
    onClick?: () => void;
    classList?: string;
    children: React.ReactNode;
}

export default function NavButton(props: NavButtonProps) {
    const defaultClasses =
        'block p-2.5 text-lg rounded-full transition hover:bg-neutral-300/40 dark:hover:bg-neutral-600/40 ';
    const additionalClasses = props.classList || '';

    const navButtonClasses = defaultClasses + additionalClasses;

    return (
        <>
            {props.href ? (
                <Link href={props.href} className={navButtonClasses}>
                    {props.children}
                </Link>
            ) : props.onClick ? (
                <button className={navButtonClasses} onClick={props.onClick}>
                    {props.children}
                </button>
            ) : (
                <button className={navButtonClasses}>{props.children}</button>
            )}
        </>
    );
}
