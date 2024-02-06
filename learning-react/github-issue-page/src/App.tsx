import styles from './App.module.css';
import Header from './components/Header';
import Issue from './components/Issue';
import Footer from './components/Footer';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Issue />
            <Footer />
        </div>
    );
}

export default App;
