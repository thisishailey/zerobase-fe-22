import styles from './styles/style.module.scss';
import Input from './components/Input';
import Filter from './components/Filter';
import Content from './components/Content';

function App() {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.heading}>Today's Task</h1>
            <Input />
            <Filter />
            <Content />
        </div>
    );
}

export default App;
