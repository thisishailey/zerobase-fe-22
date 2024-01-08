import { createElement, setLinkAttr, addThumbnailImg } from "./tools.js";
import newCategory from "./proxy.js";

const NewsItems = ($container) => {
    loadNews($container, newCategory.category);
};

let currentCategory;
let currentPage;
const defaultPageSize = 5;
const defaultApiKey = 'b2fa101aa17748ce9070e4355e67fdee';

function getNews($container, newCategory) {
    if (newCategory === currentCategory) { currentPage++; }
    else { currentPage = 1; currentCategory = newCategory; $container.querySelectorAll('.news-item').forEach(e => { e.remove(); }); }
    const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${currentCategory === 'all' ? 'general' : currentCategory}&page=${currentPage}&pageSize=${defaultPageSize}&apiKey=${defaultApiKey}`;
    return new Promise((resolve) => {
        let loadedArticles = document.querySelectorAll('.news-item').length
        axios.get(url).then(
            res => { const news = res.data.articles; const noMoreArticles = (loadedArticles + 5 >= res.data.totalResults); resolve(news, noMoreArticles); }
        );
    });
}

function createNewsItems($container) {
    const articles = [];
    return new Promise((resolve) => {
        for (let i = 0; i < defaultPageSize; i++) {
            const newsItem = createElement('section', $container, 'news-item');
            const newsThumbnail = createElement('div', newsItem, 'thumbnail');
            addThumbnailImg(createElement('img', setLinkAttr(createElement('a', newsThumbnail, '')), ''));
            const newsContent = createElement('div', newsItem, 'contents');
            setLinkAttr(createElement('a', createElement('h2', newsContent, ''), ''));
            createElement('p', newsContent, '');
            articles[i] = newsItem;
        }
        resolve(articles);
    });
}

async function loadNews($container, category) {
    const [news, noMoreArticles] = await getNews($container, category);
    if (noMoreArticles) return;
    const articles = await createNewsItems($container);
    news.forEach((article, i) => {
        articles[i].querySelectorAll('a').forEach(a => { a.href = article.url; });
        if (article.urlToImage) { articles[i].querySelector('img').src = article.urlToImage; }
        articles[i].querySelector('h2>a').innerHTML = article.title;
        articles[i].querySelector('p').innerHTML = article.description ? article.description : '';
    });
}

export default NewsItems;