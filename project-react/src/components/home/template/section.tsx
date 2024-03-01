interface SectionProps {
    title: string;
    products: object[];
}

export default function HomeSection({ title, products }: SectionProps) {
    return (
        <div className="h-40 py-10">
            <h2 className="text-xl font-semibold">{title}</h2>
        </div>
    );
}
