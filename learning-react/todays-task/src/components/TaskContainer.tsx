import styles from '../styles/style.module.scss';
import Task from './Task';
import { TaskType } from '../App';

interface TaskContainerProps {
    tasks: TaskType[];
    updateTaskInfo: (id: number, content?: string) => void;
    onRemoveClick: (id: number) => void;
}

export default function TaskContainer({
    tasks,
    updateTaskInfo,
    onRemoveClick,
}: TaskContainerProps) {
    return (
        <main className={styles.content}>
            {tasks.map((e) => (
                <Task
                    task={e}
                    updateTaskInfo={updateTaskInfo}
                    onRemoveClick={onRemoveClick}
                    key={e.id}
                />
            ))}
        </main>
    );
}
