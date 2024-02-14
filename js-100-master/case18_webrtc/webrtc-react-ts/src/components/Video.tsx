import styles from '../styles.module.css';

export default function Video({ isRecording }: { isRecording: boolean }) {
    return (
        <div className={styles.videoWrap}>
            <video
                className={isRecording ? styles.hide : 'playVideo'}
                autoPlay
                muted
            ></video>
            <video
                className={isRecording ? 'recordVideo' : styles.hide}
                autoPlay
                loop
            ></video>
        </div>
    );
}
