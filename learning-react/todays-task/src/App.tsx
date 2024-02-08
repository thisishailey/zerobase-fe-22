import { useState } from 'react';
import styles from './styles/style.module.scss';
import Input from './components/Input';
import Filter from './components/Filter';
import Content from './components/Content';

function App() {
    const [task, setTask] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [filter, setFilter] = useState('All');

    if (submitted) console.log(task);
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

export default App;
