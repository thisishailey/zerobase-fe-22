import Page from '@/components/common/template/page';

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Page classList="py-10 px-4 min-h-screen">{children}</Page>;
}
