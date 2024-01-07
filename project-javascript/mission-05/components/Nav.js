import { makeElement } from "./functions.js";
import { changeCategory } from "./events.js";

const idArr = ['all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
const textArr = ['전체보기', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술'];

const Nav = ($root) => {
    const navElement = makeElement('nav', $root, 'category-list');
    const navList = makeElement('ul', navElement, '');
    for (let i = 0; i < 7; i++) {
        const navListItem = makeElement('li', navList, 'category-item');
        navListItem.id = idArr[i];
        navListItem.innerHTML = textArr[i];
        if (i === 0) {
            navListItem.classList.add('active');
        }
    }
    changeCategory(navList);
}

export default Nav;