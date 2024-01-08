import { makeElement, addScrollImg } from "./tools.js";
import NewsItems from "./NewsItems.js";

const NewsList = ($root) => {
    const container = makeElement('div', $root, 'news-list-container');
    const news = makeElement('article', container, 'news-list');
    NewsItems(news);
    const scroll = makeElement('div', container, 'scroll-observer');
    addScrollImg(makeElement('img', scroll, ''));
}

export default NewsList;