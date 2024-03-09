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
                <div className="sm:w-full sm:max-w-sm sm:mx-auto space-y-6">
                    <h2 className="text-center text-2xl font-semibold uppercase">
                        Welcome back
                    </h2>
                    <p className="text-center text-sm">
                        Sign in to access an enhanced shopping experience.
                    </p>
                </div>
                <div className="!mt-16 sm:!mt-20 sm:w-full sm:max-w-sm sm:mx-auto">
                    <LogInForm onSubmit={handleSubmit} />
                </div>
            </div>
        </Wrap>
    );
}
