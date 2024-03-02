import type IProduct from '@/types/productData';
import ProductCard from '../../common/template/productCard';

interface SectionProps {
    title: string;
    products: IProduct[];
}

export default function HomeSection({ title, products }: SectionProps) {
    return (
        <div className="py-10">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => {
                    return (
                        <ProductCard
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
