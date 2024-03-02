import Page from '@/components/common/template/page';

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Page classList="py-10 px-4">
            {children}
            <div className="h-20"></div>
        </Page>
    );
}
