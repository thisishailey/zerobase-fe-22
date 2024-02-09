import styles from '../styles/style.module.scss';

interface CheckboxProps {
    onClick: (e: React.MouseEvent) => void;
    onMouseOver: (e: React.MouseEvent) => void;
    onMouseLeave: (e: React.MouseEvent) => void;
    checked: boolean;
}

export default function Checkbox({
    onClick,
    onMouseOver,
    onMouseLeave,
    checked,
}: CheckboxProps) {
    return (
        <div
            className={styles.taskCheck}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {checked ? 'DONE!' : 'TODO'}
        </div>
    );
}
