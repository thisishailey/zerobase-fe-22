import { useState } from 'react';
import styles from '../styles.module.css';
import Video from './Video';
import Button from './Button';

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
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        return stream;
    }
}

async function playVideoFromCamera() {
    try {
        const stream = await getMediaStream();
        const videoElement = document.querySelector(
            'video.playVideo'
        ) as HTMLVideoElement;
        videoElement.srcObject = stream as MediaProvider;
        return true;
    } catch (error) {
        console.error('Error opening video camera.', error);
    }
}

export default function WebRTC() {
    const [recordDisabled, setRecordDisabled] = useState(true);
    const [isRecording, setIsRecording] = useState(false);

    playVideoFromCamera().then(() => setRecordDisabled(false));

    const handleRecordBtnClick = {
        startRecord: () => {
            setIsRecording(true);
        },
        stopRecord: () => {
            setIsRecording(false);
        },
    };

    return (
        <section className={styles.webrtc}>
            <Video isRecording={isRecording} />
            <Button
                isRecording={isRecording}
                recordDisabled={recordDisabled}
                onClick={handleRecordBtnClick}
            />
        </section>
    );
}
