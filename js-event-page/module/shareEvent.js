const shareButton = document.querySelector('#url-share-button');

const setShareEvent = () => {
    shareButton.onclick = () => {
        navigator.clipboard.writeText(location.href);
    }
}

export default setShareEvent;