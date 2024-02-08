import { useState, useRef } from 'react';
import styles from '../styles/style.module.scss';

export default function Content() {
    const [content, setContent] = useState('task of the day');
    const [editMode, setEditMode] = useState(false);
    const [checked, setChecked] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const mainRef = useRef<HTMLElement>(null);

    function handleCheck(e: React.MouseEvent) {
        setChecked(!checked);
        const target = e.target as HTMLDivElement;
        target.classList.toggle(`${styles.taskChecked}`);
    }

    function handleCheckMouseIn(e: React.MouseEvent) {
        const target = e.target as HTMLDivElement;
        target.innerHTML = 'DONE?';
        target.classList.toggle(`${styles.taskHovered}`);
    }

    function handleCheckMouseOut(e: React.MouseEvent) {
        const target = e.target as HTMLDivElement;
        target.innerHTML = checked ? 'DONE!' : 'TODO';
        target.classList.toggle(`${styles.taskHovered}`);
    }

    function handleEditMode() {
        setEditMode(true);
    }

    function handleEdit() {
        const target = inputRef.current as HTMLInputElement;
        setContent(target.value);
    }

    function handleEditConfirm() {
        const target = inputRef.current as HTMLInputElement;
        setContent(target.value);
        setEditMode(false);
    }

    function handleRemove(e: React.MouseEvent) {
        const target = e.target as HTMLDivElement;
        const task = target.closest('main > div') as HTMLDivElement;
        const main = mainRef.current as HTMLElement;
        main.removeChild(task);
    }

    return (
        <main className={styles.content} ref={mainRef}>
            <div className={styles.task}>
                <div
                    className={styles.taskCheck}
                    onClick={handleCheck}
                    onMouseOver={handleCheckMouseIn}
                    onMouseLeave={handleCheckMouseOut}
                >
                    {checked ? 'DONE!' : 'TODO'}
                </div>
                <label
                    className={editMode ? styles.hidden : styles.taskContent}
                    onClick={handleEditMode}
                >
                    {content}
                </label>
                <input
                    className={editMode ? styles.taskContent : styles.hidden}
                    name='task-content'
                    value={content}
                    ref={inputRef}
                    onChange={handleEdit}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleEditConfirm();
                    }}
                    autoFocus
                />
                <button
                    className={
                        editMode
                            ? `${styles.taskRemove} ${styles.hidden}`
                            : styles.taskRemove
                    }
                    onClick={handleRemove}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                    >
                        <path d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z' />
                    </svg>
                </button>
                <button
                    className={
                        editMode
                            ? styles.taskEdit
                            : `${styles.taskEdit} ${styles.hidden}`
                    }
                    onClick={handleEditConfirm}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                    >
                        <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                    </svg>
                </button>
            </div>
        </main>
    );
}
