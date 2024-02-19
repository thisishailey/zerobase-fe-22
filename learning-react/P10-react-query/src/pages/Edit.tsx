import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getUser, updateNickname } from '../data/api';

export default function Edit() {
    const [inputValue, setInputValue] = useState('');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });

    const mutation = useMutation({
        mutationFn: updateNickname,
    });

    const handleChange = (e: ChangeEvent) => {
        const input = e.target as HTMLInputElement;
        setInputValue(input.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutation.mutate(inputValue);
    };

    return (
        <>
            <h1>Edit</h1>
            {isPending ? (
                <section className="loading">
                    <span>Loading...</span>
                </section>
            ) : isError ? (
                <section className="error">
                    <span>Error: {error!.message}</span>
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
                    <div className="updateStatus">
                        {mutation.isPending ? (
                            <span>Updating Nickname</span>
                        ) : mutation.isError ? (
                            <span>Update failed...</span>
                        ) : mutation.isSuccess ? (
                            <span>Successfully Updated!</span>
                        ) : null}
                    </div>
                </section>
            )}
        </>
    );
}
