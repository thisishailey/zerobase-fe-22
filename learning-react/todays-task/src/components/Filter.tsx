import styles from '../styles/style.module.scss';

interface FilterProps {
    currentFilter: string;
    filters: string[];
    onClick: (e: React.MouseEvent) => void;
}

export default function Filter({
    currentFilter,
    filters,
    onClick,
}: FilterProps) {
    return (
        <div className={styles.filter}>
            <span className={styles.filterCount}>Total 0 task</span>
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
