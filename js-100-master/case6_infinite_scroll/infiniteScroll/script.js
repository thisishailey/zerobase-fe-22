; (function () {
    'use strict';

    // util

    const get = (target) => {
        return document.querySelector(target);
    }

    const createCustomElement = (tagName, propertyMap, parentNode) => {
        const e = document.createElement(tagName);

        if (propertyMap) {
            Object.keys(propertyMap).forEach((key) => {
                e[key] = propertyMap[key];
            });
        }

        if (parentNode) parentNode.appendChild(e);

        return e;
    }

    // constants & variables

    const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts?';
    const LIMIT = 5;
    const $postContainer = get('.posts');
    let currentPage = 0;

    // get & load post

    const getPost = async () => {
        const res = await fetch(API_ENDPOINT + '_page=' + currentPage + '&_limit=' + LIMIT);

        if (!res.ok) {
            throw new Error('Fetch API Error');
        }

        return await res.json();
    }

    const loadPost = async () => {
        currentPage++;

        const res = await getPost();
        if (res.length < 1) {
            window.removeEventListener('scroll', onScroll);
        }

        createPost(res);
    }

    // create post

    const createPost = (posts) => {
        posts.forEach((post) => {
            const postInnerHTML = `
                <div class='header'>
                    <div class='id'>${post.id}</div>
                    <div class='title'>${post.title}</div>
                </div>
                <div class='body'>${post.body}</div>
            `;

            createCustomElement('div', { className: 'post', innerHTML: postInnerHTML }, $postContainer);
        });
    }

    // scroll event

    const onScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollHeight - clientHeight === scrollTop) loadPost();
    }

    // init

    const init = () => {
        window.addEventListener('DOMContentLoaded', () => {
            loadPost();
            window.addEventListener('scroll', onScroll);
        });
    }

    init();

})();