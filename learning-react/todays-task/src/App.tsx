import { useState, useEffect, useMemo } from 'react';
import styles from './styles/style.module.scss';
import Input from './components/Input';
import Filter from './components/Filter';
import TaskContainer from './components/TaskContainer';

const dummyTasks = [
    {
        id: 1,
        content: 'task of the day',
        checked: true,
    },
    {
        id: 2,
        content: "finish making today's task app",
        checked: false,
    },
];

enum filterList {
    'All',
    'To Do',
    'Completed',
}

const filters = Object.values(filterList) as string[];
filters.slice(0, filters.length / 2);

export interface TaskType {
    id: number;
    content: string;
    checked: boolean;
}

export function App() {
    const [taskList, setTaskList] = useState<TaskType[]>(dummyTasks);
    const [task, setTask] = useState('');
    const [taskCount, setTaskCount] = useState(taskList.length);
    const [filter, setFilter] = useState(filterList[0]);
    const filteredTasks = useMemo(
        () => filterTasks(taskList, filter),
        [taskList, filter]
    );

    // -------------- Create -------------- //

    function createTask(task: string) {
        const taskObj: TaskType = {
            id: Date.now(),
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

        createTask(task);

        const target = e.target as HTMLFormElement;
        const input = target.firstElementChild as HTMLInputElement;
        input.value = '';
    }

    // -------------- Read -------------- //

    function handleFilter(e: React.MouseEvent) {
        const target = e.target as HTMLButtonElement;

        const prevFilter = target.parentElement?.getElementsByClassName(
            filter
        )[0] as HTMLButtonElement;
        prevFilter.classList.remove(styles.currentFilter);

        target.classList.add(styles.currentFilter);

        setFilter(target.innerText);
    }

    function filterTasks(tasks: TaskType[], filter: string) {
        return tasks.filter((e) => {
            if (filter === filterList[0]) {
                return true;
            } else if (filter === filterList[1]) {
                return e.checked === false;
            } else if (filter === filterList[2]) {
                return e.checked === true;
            } else return false;
        });
    }

    // -------------- Update -------------- //

    useEffect(() => {
        setTaskCount(taskList.length);
        console.log(taskList);
    }, [taskList]);

    function updateTaskInfo(id: number, content?: string) {
        if (content) {
            setTaskList(
                taskList.map((e) => {
                    if (e.id !== id) {
                        return e;
                    } else {
                        return { ...e, content: content };
                    }
                })
            );
        } else {
            setTaskList(
                taskList.map((e) => {
                    if (e.id !== id) {
                        return e;
                    } else {
                        return { ...e, checked: !e.checked };
                    }
                })
            );
        }
    }

    // -------------- Delete -------------- //

    function handleRemove(id: number) {
        setTaskList(taskList.filter((e) => e.id !== id));
    }

    return (
        <div className={styles.wrap}>
            <h1 className={styles.heading}>Today's Task</h1>
            <Input
                onChange={handleTaskInputChange}
                onSubmit={handleTaskSubmit}
            />
            {taskCount > 0 && (
                <>
                    <Filter
                        taskCount={taskCount}
                        currentFilter={filter}
                        filters={filters}
                        onClick={handleFilter}
                    />
                    <TaskContainer
                        tasks={filteredTasks ? filteredTasks : taskList}
                        updateTaskInfo={updateTaskInfo}
                        onRemoveClick={handleRemove}
                    />
                </>
            )}
        </div>
    );
}
