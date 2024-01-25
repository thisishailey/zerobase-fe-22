const retryEvent = (retryButton) => {
    retryButton.onclick = () => {
        location.reload();
    }
}

export default retryEvent;