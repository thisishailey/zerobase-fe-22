import { useState, useEffect } from 'react';
import styles from './styles/style.module.scss';
import Input from './components/Input';
import Filter from './components/Filter';
import TaskContainer from './components/TaskContainer';

export interface TaskType {
    id: number;
    content: string;
    checked: boolean;
}

export function App() {
    const [taskList, setTaskList] = useState<TaskType[]>([]);
    const [task, setTask] = useState('');
    const [filter, setFilter] = useState('All');

    // -------------- Create -------------- //

    function createTask(task: string) {
        const taskObj: TaskType = {
            id: taskList.length,
            content: task,
            checked: false,
        };
        setTaskList(taskList.concat(taskObj));
    }

    function handleTaskInputChange(e: React.ChangeEvent) {
        const target = e.target as HTMLInputElement;
        setTask(target.value as string);
    }

    function handleTaskSubmit(e: React.FormEvent) {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const input = target.firstElementChild as HTMLInputElement;
        input.value = '';
        createTask(task);
    }

    // -------------- Read -------------- //

    const filterList = ['All', 'To Do', 'Completed'];

    function handleFilter(e: React.MouseEvent) {
        const target = e.target as HTMLButtonElement;
        target.parentElement
            ?.getElementsByClassName(filter)[0]
            .classList.remove(styles.currentFilter);
        setFilter(target.innerText);
        target.classList.add(styles.currentFilter);
    }

    useEffect(() => {
        console.log(filter);
    }, [filter]);

    // -------------- Update -------------- //

    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

    return (
        <div className={styles.wrap}>
            <h1 className={styles.heading}>Today's Task</h1>
            <Input
                onChange={handleTaskInputChange}
                onSubmit={handleTaskSubmit}
            />
            <Filter
                currentFilter={filter}
                filters={filterList}
                onClick={handleFilter}
            />
            <TaskContainer tasks={taskList} />
        </div>
    );
}
