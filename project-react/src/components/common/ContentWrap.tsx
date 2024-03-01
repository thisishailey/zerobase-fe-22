interface ContentWrapProps {
    children?: React.ReactNode;
    classList?: string;
}

export default function ContentWrap({ children, classList }: ContentWrapProps) {
    const defaultClasses = 'w-full max-w-screen-xl my-0 mx-auto ';
    const additionalClasses = classList || '';

    const contentWrapClasses = defaultClasses + additionalClasses;

    return (
        <>
            <div className={contentWrapClasses}>{children}</div>
        </>
    );
}
