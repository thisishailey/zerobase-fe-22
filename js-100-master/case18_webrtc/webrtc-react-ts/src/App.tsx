import styles from './styles.module.css';

function App() {
    const allowUser = {
        audio: true,
        video: true,
    };

    class WebRTC {
        constructor() {
            this.media = new MediaSource();
            this.recorder;
            this.blobs;
            this.$videoPlay = get('video.play');
            this.$videoRecord = get('video.record');
            this.$btnPlay = get('button.btn_play');
            this.$btnRecord = get('button.btn_record');
            this.$btnDownload = get('button.btn_download');
            this.$webRTC = get('section.webrtc');
            navigator.mediaDevices
                .getUserMedia(allowUser)
                .then((media) => this.success(media));
        }

        success(media) {
            this.$btnRecord.remove;
        }
    }

	function WebRTC () {
		return (
            <section className={styles.webrtc}>
                <div className={styles.videoWrap}>
                    <video src="" className="play" autoPlay muted></video>
                    <video src="" className={styles.hide} autoPlay loop></video>
                </div>
                <div className={styles.btnWrap}>
                    <button className="btn_play">Play</button>
                    <button className="btn_record" disabled>
                        Record
                    </button>
                    <button className="btn_download">Download</button>
                </div>
            </section>
        );
	}

    return (
        <main className={styles.main}>
            <h1 className={styles.heading}>WebRTC</h1>
			<WebRTC/>
        </main>
    );
}

export default App;
