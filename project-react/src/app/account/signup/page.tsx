import Wrap from '@/components/common/template/wrap';
import SignUpForm from '@/components/account/SignUpForm';

export default function SignUpPage() {
    return (
        <Wrap>
            <div className="flex flex-col justify-center py-6 sm:py-12 px-6 lg:px-8">
                <div className="sm:w-full sm:max-w-3xl sm:mx-auto mb-14">
                    <h2 className="text-3xl font-semibold">Sign up</h2>
                </div>
                <SignUpForm />
            </div>
        </Wrap>
    );
}
