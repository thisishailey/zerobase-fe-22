import SELECTED_SNACK from "../constants/selectedSnack.js";
import smoothScrollTo from "../utils/targetScroll.js";

const [noResultContainer, resultContainer] = document.querySelectorAll('.result-container');
const [, resultImg, resultName, resultDesc, retryButton] = resultContainer.children;


// ------ main function ------ //

const getResultContainer = (id, info) => {
    if (!Number(id)) return;

    const data = info.filter(e => e.id === Number(id))[0];

    noResultContainer.style.display = 'none';
    resultContainer.style.display = 'flex';

    resultImg.src = data.src;
    resultImg.alt = data.name;
    resultName.innerHTML = data.name;
    resultDesc.innerHTML = data.desc;

    setRetryEvent(retryButton);

    return resultContainer;
}


// ------ function for getResultContainer ------ //

const setRetryEvent = (btn) => {
    btn.onclick = () => {
        localStorage.removeItem(SELECTED_SNACK);
        noResultContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        document.querySelector('.snack-card-list .select')?.classList.remove('select');
        smoothScrollTo(document.querySelector('#participate-section'));
    }
}

export default getResultContainer;