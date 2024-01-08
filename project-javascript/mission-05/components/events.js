import newCategory from "./proxy.js";

function changeCategory(navList) {
    navList.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-item') && !e.target.classList.contains('active')) {
            navList.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            newCategory.category = e.target.id;
            document.querySelectorAll('.news-item').forEach(e => { e.remove() });
            document.querySelector('.scroll-observer').hidden = false;
        }
    })
}

export default changeCategory;