import styles from '../styles.module.css';

export default function Video({
    hasRecordedVideo,
}: {
    hasRecordedVideo: boolean;
}) {
    return (
        <div className={styles.videoWrap}>
            <video
                className={hasRecordedVideo ? styles.hide : 'videoFromCamera'}
                autoPlay
                muted
            ></video>
            <video
                className={hasRecordedVideo ? 'recordedVideo' : styles.hide}
                autoPlay
                loop
            ></video>
        </div>
    );
}
