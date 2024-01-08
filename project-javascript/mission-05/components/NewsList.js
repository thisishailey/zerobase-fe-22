import { createElement, addScrollImg } from "./tools.js";
import InfiniteScroll from "./observer.js";

const NewsList = ($root) => {
    const container = createElement('div', $root, 'news-list-container');
    createElement('article', container, 'news-list');
    const scroll = createElement('div', container, 'scroll-observer');
    addScrollImg(createElement('img', scroll, ''));
    InfiniteScroll(container, scroll);
}

export default NewsList;