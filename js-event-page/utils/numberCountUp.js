const countUp = (node, targetNum, sec) => {
    let displayNum = 0;
    const intervalMS = 50;

    const repeatCount = (sec * 1000) / intervalMS;
    const incNum = Math.ceil(targetNum / repeatCount);

    const intervalID = setInterval(() => {
        if (displayNum >= targetNum) {
            node.innerHTML = targetNum.toLocaleString();
            clearInterval(intervalID);
            return;
        }
        displayNum += incNum;
        node.innerHTML = displayNum.toLocaleString();
    }, intervalMS);
}

export default countUp;