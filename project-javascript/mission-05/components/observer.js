import NewsItems from "./NewsItems.js";

const InfiniteScroll = (container, scroll) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) { return; }
            NewsItems(container.querySelector('.news-list'));
        });
    });
    observer.observe(scroll);
}

export default InfiniteScroll;