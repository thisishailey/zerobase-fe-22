import { makeElement, setLinkAttr, addThumbnailImg } from "./tools.js";
import newCategory from "./proxy.js";

const NewsItems = ($container) => {
    loadNews($container, newCategory.category);
};

let currentCategory;
let currentPage;
const defaultPageSize = 5;
const defaultApiKey = 'b2fa101aa17748ce9070e4355e67fdee';

function getNews($container, newCategory) {
    let newPage;
    if (newCategory === currentCategory) { newPage = currentPage++; }
    else { newPage = currentPage = 1; currentCategory = newCategory; $container.querySelectorAll('.news-item').forEach(e => { e.remove(); }); }
    const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${currentCategory === 'all' ? 'general' : currentCategory}&page=${currentPage}&pageSize=${defaultPageSize}&apiKey=${defaultApiKey}`;
    return new Promise((resolve) => {
        axios.get(url).then(
            res => { const news = res.data.articles; resolve(news); }
        );
    })
}

function makeNewsItem($container) {
    const articles = [];
    return new Promise((resolve) => {
        for (let i = 0; i < defaultPageSize; i++) {
            const newsItem = makeElement('section', $container, 'news-item');
            const newsThumbnail = makeElement('div', newsItem, 'thumbnail');
            addThumbnailImg(makeElement('img', setLinkAttr(makeElement('a', newsThumbnail, '')), ''));
            const newsContent = makeElement('div', newsItem, 'contents');
            setLinkAttr(makeElement('a', makeElement('h2', newsContent, ''), ''));
            makeElement('p', newsContent, '');
            articles[i] = newsItem;
        }
        resolve(articles);
    })
}

async function loadNews($container, category) {
    const news = await getNews($container, category);
    const articles = await makeNewsItem($container);
    news.forEach((article, i) => {
        articles[i].querySelectorAll('a').forEach(a => { a.href = article.url; });
        if (article.urlToImage) { articles[i].querySelector('img').src = article.urlToImage; }
        articles[i].querySelector('h2>a').innerHTML = article.title;
        articles[i].querySelector('p').innerHTML = article.description ? article.description : '';
    });
}

export default NewsItems;