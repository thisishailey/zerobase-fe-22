import { addStyleSheet } from "./style.js";
import { createStarRatingContainer } from "./Container.js";
import { createStarIcon } from "./Star.js";

const StarRating = (container) => {
    addStyleSheet();
    const starNum = container.getAttribute('data-max-rating');
    createStarIcon(createStarRatingContainer(container), starNum);
}

export default StarRating;