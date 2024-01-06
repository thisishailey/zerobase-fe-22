import { makeElement, styleScrollImg } from "./functions.js";

const NewsList = ($root) => {
    const container = makeElement('div', $root, 'news-list-container');
    const news = makeElement('article', container, 'news-list');
    makeNewsItem(news);
    const scroll = makeElement('div', container, 'scroll-observer');
    styleScrollImg(makeElement('img', scroll, ''));
}

const makeNewsItem = (news) => {
    const newsItem = makeElement('section', news, 'news-item');
    const newsThumbnail = makeElement('div', newsItem, 'thumbnail');
    const newsContent = makeElement('div', newsItem, 'contents');
}

//         <section class="news-item">
//             <div class="thumbnail">
//                 <a href="https://www.ajunews.com/view/20220220180410403" target="_blank" rel="noopener noreferrer">
//                     <img
//                     src="https://image.ajunews.com/content/image/2022/02/20/20220220180523846963.jpg"
//                     alt="thumbnail" />
//                 </a>
//             </div>
//             <div class="contents">
//                 <h2>
//                     <a href="https://www.ajunews.com/view/20220220180410403" target="_blank" rel="noopener noreferrer">
//                     ​[뉴욕증시 주간전망] 러시아-우크라이나 긴장 속 변동성 지속 - 아주경제
//                     </a>
//                 </h2>
//                 <p>
//                     이번 주(21일~25일·현지시간) 뉴욕 증시는 러시아와 우크라이나 간 지정학적 긴장과 우크라이나 간 미국
//                     연방준비제도(Fed·연준)의 긴축 우려에 계속해서...
//                 </p>
//             </div>
//         </section>
//         <section class="news-item"></section> * n



export default NewsList;