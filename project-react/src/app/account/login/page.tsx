'use client';

import Wrap from '@/components/common/template/wrap';
import LogInForm from '@/components/account/LogInForm';
import { useRouter } from 'next/navigation';

export default function LogInPage() {
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            router.push('/profile');
        } else {
            // Handle errors
        }
    }

    return (
        <Wrap>
            <div className="flex flex-col justify-center py-16 px-6 lg:px-8">
                <div className="sm:w-full sm:max-w-sm sm:mx-auto">
                    <h2 className="text-center text-2xl sm:text-3xl font-semibold">
                        Sign in to your account
                    </h2>
                </div>
                <div className="!mt-16 sm:!mt-20 sm:w-full sm:max-w-sm sm:mx-auto">
                    <LogInForm onSubmit={handleSubmit} />
                    <p className="mt-6 text-center text-sm sm:text-base text-gray-500">
                        Not a member?
                        <a
                            href="/account/signup"
                            className="ml-4 font-semibold text-blue-600 hover:text-blue-500"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </Wrap>
    );
}
