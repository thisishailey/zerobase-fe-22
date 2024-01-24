import smoothScrollTo from "../utils/targetScroll.js";

// tab menu buttons
const selectMenu = document.querySelector('#anchor-to-select');
const resultMenu = document.querySelector('#anchor-to-result');
const mbtiMenu = document.querySelector('#anchor-to-mbti');

// sections
const selectSection = document.querySelector('#participate-section');
const resultSection = document.querySelector('#result-section');
const mbtiSection = document.querySelector('#mbti-section');


// ------ main function ------ //

const setTabMenu = () => {
    document.querySelector('#tab-menu').onclick = (e) => {
        if (e.target === selectMenu) {
            smoothScrollTo(selectSection);
        } else if (e.target === resultMenu) {
            smoothScrollTo(resultSection);
        } else if (e.target === mbtiMenu) {
            smoothScrollTo(mbtiSection);
        }
    }
}

export default setTabMenu;