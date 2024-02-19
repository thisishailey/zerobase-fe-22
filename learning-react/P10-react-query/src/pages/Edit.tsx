import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../data/api';
import type { UserDB } from '../data/db';

export default function Edit() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: ChangeEvent) => {
        const input = e.target as HTMLInputElement;
        setInputValue(input.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    const result = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });

    console.log(result);

    const isPending = result.isPending;
    const data = result.data as unknown as UserDB;

    return (
        <>
            <h1>Edit</h1>
            {isPending ? (
                <section className="loading">
                    <span>Loading...</span>
                </section>
            ) : (
                <section className="edit">
                    <h3>
                        Current Nickname: <span>{data.nickname}</span>
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <label>
                            New Nickname:
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleChange}
                            />
                        </label>
                    </form>
                </section>
            )}
        </>
    );
}
