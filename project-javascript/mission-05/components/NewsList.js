import { makeElement, setLinkAttr, addThumbnailImg, addScrollImg } from "./functions.js";

const NewsList = ($root) => {
    const container = makeElement('div', $root, 'news-list-container');
    const news = makeElement('article', container, 'news-list');
    const NewsItems = [];
    for (let i = 0; i < pageSize; i++) {
        NewsItems[i] = makeNewsItem(news);
    }
    const scroll = makeElement('div', container, 'scroll-observer');
    addScrollImg(makeElement('img', scroll, ''));
}

function makeNewsItem(news) {
    const newsItem = makeElement('section', news, 'news-item');
    const newsThumbnail = makeElement('div', newsItem, 'thumbnail');
    addThumbnailImg(makeElement('img', setLinkAttr(makeElement('a', newsThumbnail, '')), ''));
    const newsContent = makeElement('div', newsItem, 'contents');
    setLinkAttr(makeElement('a', makeElement('h2', newsContent, ''), ''));
    makeElement('p', newsContent, '');
    return newsItem;
}

let category = 'all';
let page = 1;
const pageSize = 5;
const apiKey = 'b2fa101aa17748ce9070e4355e67fdee';

function getNews() {
    category = 'all';
    page = 1;
    // const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? 'general' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    return new Promise((resolve) => {
        axios.get(url).then(
            res => { const news = res.data.articles; resolve(news); }
        );
    })
}

async function loadNews() {
    const news = await getNews();
    news.forEach((article, i) => {
        NewsItems[i].querySelectorAll('a').forEach(a => { a.href = article.url; });
        if (article.urlToImage) { NewsItems[i].querySelector('img').src = article.urlToImage; }
        NewsItems[i].querySelector('h2>a').innerHTML = article.title;
        NewsItems[i].querySelector('p') = article.description;
    });
}

loadNews();

export default NewsList;