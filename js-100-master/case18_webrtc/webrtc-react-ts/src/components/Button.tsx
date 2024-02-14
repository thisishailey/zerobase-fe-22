import styles from '../styles.module.css';

interface ButtonProps {
    disablePlayDownloadBtn: boolean;
    disableRecordBtn: boolean;
    isRecording: boolean;
    onPlayClick: () => void;
    onDownloadClick: () => void;
}

export default function Button({
    disablePlayDownloadBtn,
    disableRecordBtn,
    isRecording,
    onPlayClick,
    onDownloadClick,
}: ButtonProps) {
    return (
        <div className={styles.btnWrap}>
            <button disabled={disablePlayDownloadBtn} onClick={onPlayClick}>
                Play
            </button>
            <button className="recordBtn" disabled={disableRecordBtn}>
                {isRecording ? 'Stop' : 'Record'}
            </button>
            <button disabled={disablePlayDownloadBtn} onClick={onDownloadClick}>
                Download
            </button>
        </div>
    );
}
