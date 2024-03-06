import Wrap from '@/components/common/template/wrap';
import OrderSummary from '@/components/checkout/OrderSummary';

export default function Checkout() {
    return (
        <Wrap>
            <span>Payment successful</span>
            <h2 className="text-2xl sm:text-3xl font-semibold w-full my-6 sm:m-6 py-4 px-1">
                Thanks for ordering
            </h2>
            <p>
                We appreciate your order, we’re currently processing it. So hang
                tight and we’ll send you confirmation very soon!
            </p>
            <OrderSummary isOrderComplete={true} />
        </Wrap>
    );
}
