import styles from './styles.module.css';
import WebRTC from './components/WebRTC';

export default function App() {
    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>WebRTC</h1>
            <WebRTC />
        </main>
    );
}
