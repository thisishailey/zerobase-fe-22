import { useState } from 'react';
import styles from '../styles.module.css';
import Video from './Video';
import Button from './Button';

export default function WebRTC() {
    const [recordDisabled, setRecordDisabled] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [hasRecordedVideo, setHasRecordedVideo] = useState(false);

    async function getConnectedDevices(type: MediaDeviceKind) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.filter((device) => device.kind === type);
    }

    async function getMediaStream() {
        const cameras = await getConnectedDevices('videoinput');
        if (cameras && cameras.length > 0) {
            const constraints: MediaStreamConstraints = {
                audio: { echoCancellation: true },
                video: {
                    deviceId: cameras[0].deviceId,
                    width: { min: 400 * (16 / 9) },
                    height: { min: 400 },
                },
            };
            const stream = await navigator.mediaDevices.getUserMedia(
                constraints
            );
            return stream;
        }
    }

    async function playVideoFromCamera() {
        try {
            const stream = await getMediaStream();
            const videoElement = document.querySelector(
                'video.videoFromCamera'
            ) as HTMLVideoElement;
            videoElement.srcObject = stream as MediaProvider;
            return stream;
        } catch (error) {
            console.error('Error opening video camera.', error);
        }
    }

    if (!hasRecordedVideo) {
        playVideoFromCamera().then(async (stream) => {
            setRecordDisabled(false);
            if (stream) {
                const mediaRecorder = await setRecorder(stream);
                const recordButton = document.querySelector(
                    '.recordBtn'
                ) as HTMLButtonElement;
                recordButton.onclick = () => {
                    handleRecord(mediaRecorder);
                };
            }
        });
    }

    const recordedChunks: Blob[] = [];
    const options = { mimeType: 'video/webm; codecs=vp9' };

    async function setRecorder(stream: MediaStream) {
        const mediaRecorder = new MediaRecorder(stream, options);
        mediaRecorder.ondataavailable = (event) =>
            recordedChunks.push(event.data);
        return mediaRecorder;
    }

    function handleRecord(mediaRecorder: MediaRecorder) {
        if (isRecording) {
            console.log('stop recording');
            mediaRecorder.stop();
            setIsRecording(false);
            setRecordDisabled(true);
            setHasRecordedVideo(true);
        } else {
            console.log('start recording');
            mediaRecorder.start();
            setIsRecording(true);
        }
    }

    function handlePlay() {
        const videoElement = document.querySelector(
            '.recordedVideo'
        ) as HTMLVideoElement;
        videoElement.src = window.URL.createObjectURL(
            new Blob(recordedChunks, { type: 'video/webm' })
        );
    }

    function handleDownload() {
        download();
    }

    function download() {
        const blob = new Blob(recordedChunks, {
            type: 'video/webm',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        a.href = url;
        a.download = 'test.webm';
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);
    }

    return (
        <section className={styles.webrtc}>
            <Video hasRecordedVideo={hasRecordedVideo} />
            <Button
                disablePlayDownloadBtn={!hasRecordedVideo}
                disableRecordBtn={recordDisabled}
                isRecording={isRecording}
                onPlayClick={handlePlay}
                onDownloadClick={handleDownload}
            />
        </section>
    );
}
