export function createStarIcon(ratingContainer, starNum) {
    for (let i = 0; i < starNum; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('bx', 'bxs-star');
        ratingContainer.appendChild(starIcon);
    }
}