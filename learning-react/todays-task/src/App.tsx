import { useState } from 'react';
import styles from './styles/style.module.scss';
import Input from './components/Input';
import Filter from './components/Filter';
import Content from './components/Content';

interface Task {
    id: number;
    content: string;
    checked: boolean;
}

const taskList: Task[] = [];

export default function App() {
    const [task, setTask] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [filter, setFilter] = useState('All');

    function createTask(task: string) {
        const taskObj: Task = {
            id: taskList.length,
            content: task,
            checked: false,
        };
        taskList.push(taskObj);
        console.log(taskList);
    }

    if (submitted) {
        setSubmitted(false);
        createTask(task);
    }

    if (filter !== 'All') console.log(filter);

    return (
        <div className={styles.wrap}>
            <h1 className={styles.heading}>Today's Task</h1>
            <Input setTask={setTask} setSubmitted={setSubmitted} />
            <Filter setFilter={setFilter} />
            <Content />
        </div>
    );
}
