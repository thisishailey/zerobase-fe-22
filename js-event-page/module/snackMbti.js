const mbtiContainers = document.querySelectorAll('.mbti-container');
const [questionPage, pendingPage, resultPage] = mbtiContainers;

const mbtiQuestionList = [
    '짠 과자가 단 과자보다 좋다.',
    '봉지 과자가 박스 과자보다 좋다',
    '과자를 뜯으면 한 번에 다 먹는다.'
];


// ------ main function ------ //

const setMbtiSection = () => {
    showQuestionPage();
}


// ------ show page functions ------ //

const showQuestionPage = () => {
    setDisplay(questionPage);

    const [question, choice] = questionPage.querySelectorAll('div');
    const [yes, no] = choice.querySelectorAll('button');

    let currentRound = 0;
    const maxRound = mbtiQuestionList.length;
    let score = 0;

    const getQuestion = () => {
        if (currentRound === maxRound) showPendingPage(score);
        question.innerHTML = mbtiQuestionList[currentRound++];
    }

    getQuestion();

    yes.onclick = () => {
        score++;
        getQuestion();
    }
    no.onclick = () => {
        getQuestion();
    }
}

const showPendingPage = (score) => {
    setDisplay(pendingPage);

    setTimeout(() => {
        showResultPage(resultCalculator(score));
    }, 2000);
}

const showResultPage = (result) => {
    setDisplay(resultPage);

    const [resultTitle, resultDesc] = resultPage.querySelectorAll('div');
    const retryButton = resultPage.querySelector('.mbti-retry-button');

    resultTitle.innerHTML = result.title;
    resultDesc.innerHTML = result.desc;

    retryButton.onclick = () => { setMbtiSection() };
}


// ------ util functions ------ //

const setDisplay = (currentPage) => {
    mbtiContainers.forEach(e => e.style.display = 'none');
    currentPage.style.display = 'block';
}

const resultCalculator = (score) => {
    switch (score) {
        case 0:
            return {
                title: '과자 뉴비 (A 유형)',
                desc: '당신의 과자 MBTI는 "과자 뉴비" 입니다!'
            }
        case 1:
            return {
                title: '과자 초심자 (B 유형)',
                desc: '당신의 과자 MBTI는 "과자 초심자" 입니다!'
            }
        case 2:
            return {
                title: '과자 중급자 (C 유형)',
                desc: '당신의 과자 MBTI는 "과자 중급자" 입니다!'
            }
        case 3:
            return {
                title: '과자 고수 (D 유형)',
                desc: '당신의 과자 MBTI는 "과자 고수" 입니다!'
            }

        default:
            break;
    }
}

export default setMbtiSection;