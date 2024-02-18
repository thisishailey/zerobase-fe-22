import styles from '../styles/style.module.scss';

interface FilterProps {
    taskCount: number;
    currentFilter: string;
    filters: string[];
    onClick: (e: React.MouseEvent) => void;
}

export default function Filter({
    taskCount,
    currentFilter,
    filters,
    onClick,
}: FilterProps) {
    return (
        <div className={styles.filter}>
            <span className={styles.filterCount}>
                Total {taskCount} {taskCount < 2 ? 'task' : 'tasks'}
            </span>
            <div className={styles.filterList}>
                {filters.map((e) => (
                    <button
                        className={
                            e === currentFilter
                                ? `${styles.filterButton} ${e} ${styles.currentFilter}`
                                : `${styles.filterButton} ${e}`
                        }
                        onClick={onClick}
                        key={e}
                    >
                        {e}
                    </button>
                ))}
            </div>
        </div>
    );
}
