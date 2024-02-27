export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div className="min-h-screen">
            <main className="p-10">
                <h2>This is a detail page of product {id}.</h2>
            </main>
        </div>
    );
}
