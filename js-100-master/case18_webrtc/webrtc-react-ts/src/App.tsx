import { useState } from 'react';
import styles from './styles.module.css';

function App() {
    const allowUser = {
        audio: true,
        video: true,
    };

    function WebRTC() {
        const [recordDisabled, setRecordDisabled] = useState(true);
        const [videoPlayURL, setVideoPlayURL] = useState('');
        const [isRecording, setIsRecording] = useState(false);

        navigator.mediaDevices
            .getUserMedia(allowUser)
            .then((media) => success(media));

        function success(media: MediaStream) {
            setRecordDisabled(false);
            if (window.URL) {
                setVideoPlayURL(window.URL.createObjectURL(media));
            } else {
                setVideoPlayURL(media);
            }
        }

        function startRecord() {
            setIsRecording(true);
        }

        function stopRecord() {
            setIsRecording(false);
        }

        return (
            <section className={styles.webrtc}>
                <div className={styles.videoWrap}>
                    <video
                        src={videoPlayURL}
                        className={isRecording ? styles.hide : ''}
                        autoPlay
                        muted
                    ></video>
                    <video
                        src=""
                        className={isRecording ? '' : styles.hide}
                        autoPlay
                        loop
                    ></video>
                </div>
                <div className={styles.btnWrap}>
                    <button disabled={isRecording}>Play</button>
                    <button
                        disabled={recordDisabled}
                        onClick={isRecording ? stopRecord : startRecord}
                    >
                        {isRecording ? 'Stop' : 'Record'}
                    </button>
                    <button disabled={isRecording}>Download</button>
                </div>
            </section>
        );
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>WebRTC</h1>
            <WebRTC />
        </main>
    );
}

export default App;
