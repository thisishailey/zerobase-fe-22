import styles from '../styles/style.module.scss';
import { MinusIcon, ConfirmIcon } from './Icon';

interface OptionButtonsProps {
    editMode: boolean;
    onEditClick: () => void;
    onRemoveClick: (e: React.MouseEvent) => void;
}

export default function OptionButtons({
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
                onClick={onRemoveClick}
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
