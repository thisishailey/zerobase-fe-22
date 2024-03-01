interface WrapProps {
    children?: React.ReactNode;
    classList?: string;
}

export default function Wrap({ children, classList }: WrapProps) {
    const defaultClasses = 'w-full max-w-screen-2xl my-0 mx-auto ';
    const additionalClasses = classList || '';

    const contentWrapClasses = defaultClasses + additionalClasses;

    return (
        <>
            <div className={contentWrapClasses}>{children}</div>
        </>
    );
}
