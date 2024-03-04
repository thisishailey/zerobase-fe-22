import Wrap from '@/components/common/template/wrap';
import CartItem from '@/components/cart/CartItem';

export default function Cart() {
    return (
        <Wrap classList="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
                <h2 className="text-3xl font-medium my-6 mx-2">Cart</h2>
                <table className="w-full">
                    <thead className="border-b border-gray-300 dark:border-neutral-600">
                        <tr className="text-sm h-12">
                            <th className="font-medium pl-3">Item</th>
                            <th className="font-medium"></th>
                            <th className="font-medium text-center">
                                Quantity
                            </th>
                            <th className="font-medium text-center">Price</th>
                            <th className="font-medium text-center">Total</th>
                            <th className="font-medium"></th>
                        </tr>
                    </thead>
                    <tbody className="border-b border-gray-300 dark:border-neutral-600">
                        <CartItem itemId={1} />
                    </tbody>
                </table>
            </div>
            <div>
                <h3 className="text-2xl font-medium">Summary</h3>
            </div>
        </Wrap>
    );
}
