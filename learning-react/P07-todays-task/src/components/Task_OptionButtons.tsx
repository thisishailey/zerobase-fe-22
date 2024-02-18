import styles from '../styles/style.module.scss';
import { MinusIcon, ConfirmIcon } from './Icon';

interface OptionButtonsProps {
    id: number;
    editMode: boolean;
    onEditClick: () => void;
    onRemoveClick: (id: number) => void;
}

export default function OptionButtons({
    id,
    editMode,
    onEditClick,
    onRemoveClick,
}: OptionButtonsProps) {
    return (
        <>
            <button
                className={
                    editMode
                        ? `${styles.taskRemove} ${styles.hidden}`
                        : styles.taskRemove
                }
                onClick={() => onRemoveClick(id)}
            >
                <MinusIcon />
            </button>
            <button
                className={
                    editMode
                        ? styles.taskEdit
                        : `${styles.taskEdit} ${styles.hidden}`
                }
                onClick={onEditClick}
            >
                <ConfirmIcon />
            </button>
        </>
    );
}
