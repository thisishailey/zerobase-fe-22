// when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('navActive') === null) {
        localStorage.navActive = 'n';
    }
    if (localStorage.navActive === 'y') {
        document.querySelector('nav').classList.add('active');
    }
    document.querySelector('body').style.visibility = 'visible';
});

// when the toggle button clicks
document.querySelector('i.toggle').addEventListener('click', () => {
    document.querySelector('body').classList.remove('preload');
    document.querySelector('nav').classList.toggle('active');
    if (localStorage.navActive === 'y') { localStorage.navActive = 'n'; }
    else { localStorage.navActive = 'y'; }
});