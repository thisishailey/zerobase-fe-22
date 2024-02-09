import styles from '../styles/style.module.scss';

interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({ setFilter }: FilterProps) {
    const filterList = ['All', 'To Do', 'Completed'];

    function handleFilter(e: React.MouseEvent) {
        const target = e.target as HTMLButtonElement;
        setFilter(target.innerText);
    }

    return (
        <div className={styles.filter}>
            <span className={styles.filterCount}>Total 0 task</span>
            <div className={styles.filterList}>
                {filterList.map((e) => (
                    <button
                        className={styles.filterButton}
                        onClick={handleFilter}
                        key={e}
                    >
                        {e}
                    </button>
                ))}
            </div>
        </div>
    );
}
