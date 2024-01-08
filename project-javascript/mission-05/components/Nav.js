import { createElement } from "./tools.js";
import changeCategory from "./events.js";

const idArr = ['all', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
const textArr = ['전체보기', '비즈니스', '엔터테인먼트', '건강', '과학', '스포츠', '기술'];

const Nav = ($root) => {
    const navElement = createElement('nav', $root, 'category-list');
    const navList = createElement('ul', navElement, '');
    for (let i = 0; i < 7; i++) {
        const navListItem = createElement('li', navList, 'category-item');
        navListItem.id = idArr[i];
        navListItem.innerHTML = textArr[i];
        if (i === 0) {
            navListItem.classList.add('active');
        }
    }
    changeCategory(navList);
}

export default Nav;