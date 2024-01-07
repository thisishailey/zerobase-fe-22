import currentCategory from "./proxy.js";

function changeCategory(navList) {
    navList.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-item') && !e.target.classList.contains('active')) {
            navList.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            currentCategory.category = e.target.id;
        }
    })
}

export { changeCategory };