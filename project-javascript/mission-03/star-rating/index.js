import { addStyleSheet } from "./style.js";
import { createStarRatingContainer } from "./Container.js";
import { createStarIcon, starChangeColor } from "./Star.js";

const StarRating = (container) => {
    addStyleSheet();
    const starNum = container.getAttribute('data-max-rating');
    createStarIcon(createStarRatingContainer(container), starNum);
    starChangeColor(container);
}

export default StarRating;