import styles from '../styles/style.module.scss';

interface TaskContentProps {
    id: string;
    checked: boolean;
    content: string;
    editMode: boolean;
    onContentClick: () => void;
    onInputChange: (e: React.ChangeEvent) => void;
    onEditClick: () => void;
}

export default function TaskContent({
    id,
    checked,
    content,
    editMode,
    onContentClick,
    onInputChange,
    onEditClick,
}: TaskContentProps) {
    return (
        <>
            <label
                className={
                    editMode
                        ? styles.hidden
                        : checked
                        ? `${styles.taskContent} ${styles.taskChecked}`
                        : styles.taskContent
                }
                onClick={onContentClick}
                htmlFor={id}
            >
                {content}
            </label>
            <input
                className={editMode ? styles.taskContent : styles.hidden}
                id={id}
                value={content}
                onChange={onInputChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') onEditClick();
                }}
                minLength={1}
                maxLength={40}
                autoCapitalize='off'
                autoCorrect='off'
                autoComplete='off'
                autoSave='off'
                aria-autocomplete='none'
                autoFocus
            />
        </>
    );
}
