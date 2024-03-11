import Wrap from '@/components/common/template/Wrap';
import CheckoutSummary from '@/components/_checkout/CheckoutSummary';

export default function CheckoutPage() {
    return (
        <Wrap>
            <h2 className="text-2xl sm:text-3xl font-semibold w-full my-6 sm:m-6 py-4 px-1">
                Checkout
            </h2>
            <CheckoutSummary />
        </Wrap>
    );
}
