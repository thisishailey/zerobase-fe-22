import Page from '@/components/common/template/page';
import Wrap from '@/components/common/template/wrap';

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Page classList="py-10 px-4">
            <Wrap classList="flex justify-between flex-col md:flex-row">
                {children}
            </Wrap>
            <div className="h-12 mb-10"></div>
        </Page>
    );
}
