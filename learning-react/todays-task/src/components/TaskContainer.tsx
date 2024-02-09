import { useRef } from 'react';
import styles from '../styles/style.module.scss';
import Task from './Task';
import { TaskType } from '../App';

interface TaskContainerProps {
    tasks: TaskType[];
}

export default function TaskContainer({ tasks }: TaskContainerProps) {
    const mainRef = useRef<HTMLElement>(null);

    function handleRemove(e: React.MouseEvent) {
        const target = e.target as HTMLDivElement;
        const task = target.closest('main > div') as HTMLDivElement;
        const main = mainRef.current as HTMLElement;
        main.removeChild(task);
    }

    return (
        <main className={styles.content} ref={mainRef}>
            {tasks.map((e) => (
                <Task task={e} onRemoveClick={handleRemove} key={e.id} />
            ))}
        </main>
    );
}
