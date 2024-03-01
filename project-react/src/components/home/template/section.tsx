import type Product from '@/types/productData';
import HomeSectionItem from './item';

interface SectionProps {
    title: string;
    products: Product[];
}

export default function HomeSection({ title, products }: SectionProps) {
    return (
        <div className="py-10">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex items-start justify-between">
                {products.map((product) => {
                    return (
                        <HomeSectionItem
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            key={product.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}
