import Wrap from '@/components/common/template/wrap';
import CartTable from '@/components/cart/CartTable';

export default function Cart() {
    return (
        <Wrap>
            <h2 className="text-2xl sm:text-3xl font-semibold w-3/5 my-6 sm:m-6 py-4 px-1 border-b border-gray-300 dark:border-neutral-500">
                Shopping Cart
            </h2>
            <CartTable />
        </Wrap>
    );
}
