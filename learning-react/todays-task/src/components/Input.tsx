import { FormEvent, useRef } from 'react';
import styles from '../styles/style.module.scss';

interface InputProps {
    setTask: React.Dispatch<React.SetStateAction<string>>;
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Input({ setTask, setSubmitted }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleChange() {
        setTask(inputRef.current?.value as string);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (inputRef.current) inputRef.current.value = '';
        setSubmitted(true);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type='text'
                name='task'
                minLength={1}
                maxLength={50}
                placeholder='Type your Task here!'
                ref={inputRef}
                onChange={handleChange}
                autoComplete='off'
                autoFocus
            />
            <button className={styles.inputButton} type='submit'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
                </svg>
            </button>
        </form>
    );
}
