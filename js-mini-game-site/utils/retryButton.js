const setRetryEvent = (retryButton) => {
    retryButton.onclick = () => {
        location.reload();
    }
}

export default setRetryEvent;