export function createStarRatingContainer(container) {
    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('star-rating-container');
    container.appendChild(ratingContainer);
    return ratingContainer;
}