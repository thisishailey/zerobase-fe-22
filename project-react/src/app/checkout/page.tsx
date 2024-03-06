import Wrap from '@/components/common/template/wrap';
import OrderSummary from '@/components/checkout/OrderSummary';

export default function Checkout() {
    return (
        <Wrap>
            <h2 className="text-2xl sm:text-3xl font-semibold w-full my-6 sm:m-6 py-4 px-1">
                Checkout
            </h2>
            <OrderSummary />
        </Wrap>
    );
}
