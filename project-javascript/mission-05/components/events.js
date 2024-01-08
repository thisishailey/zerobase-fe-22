import newCategory from "./proxy.js";
import NewsItems from "./NewsItems.js";

function changeCategory(navList) {
    navList.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-item') && !e.target.classList.contains('active')) {
            navList.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            newCategory.category = e.target.id;
            NewsItems(document.querySelector('.news-list'));
        }
    })
}

export { changeCategory };