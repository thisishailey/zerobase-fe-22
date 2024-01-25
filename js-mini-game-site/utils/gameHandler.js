import { timer } from "./timer.js";
import handleOpenModal from "./modal.js";

const handleGameWin = (key) => {
    handleOpenModal({ title: '성공 🥳', desc: `${timer.innerHTML}만에 성공하였습니다!` });
    const originalScore = Number(localStorage.getItem(key));
    const newScore = Number(timer.dataset.time);
    if (!originalScore || newScore < originalScore) {
        localStorage.setItem(key, newScore);
    }
}

const handleGameLose = () => {
    handleOpenModal({ title: '실패 😭', desc: '실패하였습니다...' });
}

export { handleGameWin, handleGameLose }