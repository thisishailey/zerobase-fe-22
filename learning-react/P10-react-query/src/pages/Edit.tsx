import { ChangeEvent, FormEvent, useState } from 'react';

export default function Edit() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: ChangeEvent) => {
        const input = e.target as HTMLInputElement;
        setInputValue(input.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <h1>Edit</h1>
            <section className="edit">
                <h3>
                    Current Nickname: <span>{'user'}</span>
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
        </>
    );
}
