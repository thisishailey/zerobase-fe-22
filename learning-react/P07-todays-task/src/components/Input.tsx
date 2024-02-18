import styles from '../styles/style.module.scss';
import { PlusIcon } from './Icon';

interface InputProps {
    onChange: (e: React.ChangeEvent<Element>) => void;
    onSubmit: (e: React.FormEvent<Element>) => void;
}

export default function Input({ onChange, onSubmit }: InputProps) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
                className={styles.input}
                type='text'
                name='task'
                minLength={1}
                maxLength={40}
                placeholder='Type your Task here!'
                onChange={onChange}
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                autoSave='off'
                aria-autocomplete='none'
                autoFocus
            />
            <button className={styles.inputButton} type='submit'>
                <PlusIcon />
            </button>
        </form>
    );
}
