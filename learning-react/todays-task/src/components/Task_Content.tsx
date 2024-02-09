import styles from '../styles/style.module.scss';

interface TaskContentProps {
    checked: boolean;
    content: string;
    editMode: boolean;
    onContentClick: () => void;
    onInputChange: (e: React.ChangeEvent) => void;
    onEditClick: () => void;
}

export default function TaskContent({
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
            >
                {content}
            </label>
            <input
                className={editMode ? styles.taskContent : styles.hidden}
                name='task-content'
                value={content}
                onChange={onInputChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') onEditClick();
                }}
                minLength={1}
                maxLength={50}
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
