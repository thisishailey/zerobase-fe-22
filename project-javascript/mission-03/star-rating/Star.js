export function createStarIcon(ratingContainer, starNum) {
    for (let i = 0; i < starNum; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('bx', 'bxs-star');
        ratingContainer.appendChild(starIcon);
    }
}

export function starChangeColor(container) {
    container.querySelectorAll('i.bxs-star').forEach((star) => {
        hover(star);
        unhover(star);
        click(star, container);
    });
}

function hover(star) {
    star.addEventListener('mouseover', (e) => {
        colorChange(e, 'hovered');
    });
}

function unhover(star) {
    star.addEventListener('mouseleave', () => {
        document.querySelectorAll('i.hovered').forEach((e) => {
            e.classList.remove('hovered');
        });
    });
}

function click(star, container) {
    star.addEventListener('click', (e) => {
        colorChange(e, 'selected');
        const rating = container.querySelectorAll('i.selected').length;
        const event = new CustomEvent('rating-change', { detail: rating });
        container.dispatchEvent(event);
    });
}

function colorChange(e, color) {
    const colorStars = [e.target];
    let prevStar = e.target.previousElementSibling;
    while (prevStar) {
        colorStars.push(prevStar);
        prevStar = prevStar.previousElementSibling;
    }
    colorStars.forEach((colorStar) => {
        colorStar.classList.add(color);
    });
}