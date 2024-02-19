import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser, updateNickname } from '../data/api';

export default function Edit() {
    const [inputValue, setInputValue] = useState('');
    const queryClient = useQueryClient();

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
    });

    const mutation = useMutation({
        mutationFn: updateNickname,
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
    });

    const handleChange = (e: ChangeEvent) => {
        const input = e.target as HTMLInputElement;
        setInputValue(input.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        inputValue.split('').length > 2
            ? mutation.mutate(inputValue)
            : alert(
                  'Enter a valid nickname. \nA nickname should have more than two characters.'
              );
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
                            <span>Updating...</span>
                        ) : mutation.isError ? (
                            <span>Update Failed: {mutation.error.message}</span>
                        ) : mutation.isSuccess ? (
                            <span>Successfully Updated!</span>
                        ) : null}
                    </div>
                </section>
            )}
        </>
    );
}
