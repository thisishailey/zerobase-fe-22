export function addStyleSheet() {
    if (!document.querySelector('link[href="./star-rating/theme.css"]')) {
        const ratingStyle = document.createElement('link');
        ratingStyle.setAttribute('href', './star-rating/theme.css');
        ratingStyle.setAttribute('rel', 'stylesheet');
        const linkElement = document.querySelector('link:last-of-type');
        linkElement.insertAdjacentElement('afterend', ratingStyle);
    }
}