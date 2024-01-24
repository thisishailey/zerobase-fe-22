// smoothly scrolls to the targeted element
const smoothScrollTo = (target) => {
    scroll({ top: target.offsetTop, left: 0, behavior: 'smooth' });
}

export default smoothScrollTo;