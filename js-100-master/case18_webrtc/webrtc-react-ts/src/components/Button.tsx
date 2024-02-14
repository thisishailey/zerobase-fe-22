import styles from '../styles.module.css';

interface ButtonProps {
    isRecording: boolean;
    recordDisabled: boolean;
    onClick: {
        startRecord: () => void;
        stopRecord: () => void;
    };
}

export default function Button({
    isRecording,
    recordDisabled,
    onClick,
}: ButtonProps) {
    return (
        <div className={styles.btnWrap}>
            <button disabled={isRecording}>Play</button>
            <button
                disabled={recordDisabled}
                onClick={isRecording ? onClick.stopRecord : onClick.startRecord}
            >
                {isRecording ? 'Stop' : 'Record'}
            </button>
            <button disabled={isRecording}>Download</button>
        </div>
    );
}
