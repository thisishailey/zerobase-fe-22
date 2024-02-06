(function () {
    'use strict';

    // util

    const get = (target) => {
        return document.querySelector(target);
    };

    const createCustomElement = (tagName, propertyMap, parentNode) => {
        const e = document.createElement(tagName);
        if (propertyMap) {
            Object.keys(propertyMap).forEach((key) => {
                e[key] = propertyMap[key];
            });
        }
        if (parentNode) parentNode.appendChild(e);

        return e;
    };

    // constants & variables

    const API_ENDPOINT = 'http://localhost:3000/todo';
    const PAGE_ON_SCREEN = 5;
    const ITEM_PER_PAGE = 5;
    const CURRENT_PAGE_KEY = 'currentPage';
    let todoId, currentPage;

    currentPage = localStorage.getItem(CURRENT_PAGE_KEY) || 1;

    const $todoForm = get('form.todo_form');
    const $todoFormInput = get('input.todo_input');
    const $todo = get('div.todo');
    const $pagination = get('div.pagination');

    // create todo

    const createTodoElement = (item, parentNode) => {
        const { id, content, completed } = item;
        const isChecked = completed ? 'checked' : '';
        const innerHTML = `
            <div class='content'>
                <input type='checkbox' class='todo_checkbox' ${isChecked} />
                <label class='content_mode'>${content}</label>
                <input class='edit_mode hide' type='text' value='${content}' />
            </div>
            <div class='item_buttons content_buttons content_mode'>
                <button class='todo_edit_button'>
                    <i class='far fa-edit'></i>
                </button>
                <button class='todo_remove_button'>
                    <i class='far fa-trash-alt'></i>
                </button>
            </div>
            <div class='item_buttons edit_buttons edit_mode hide'>
                <button class='todo_edit_confirm_button'>
                    <i class='fas fa-check'></i>
                </button>
                <button class='todo_edit_cancel_button'>
                    <i class='fas fa-times'></i>
                </button>
            </div>
        `;

        const $todoItem = createCustomElement(
            'div',
            { className: 'item', innerHTML: innerHTML },
            parentNode
        );
        $todoItem.dataset.id = id;

        setEditOnEnterEvent($todoItem);

        return $todoItem;
    };

    const setEditOnEnterEvent = ($todoItem) => {
        const $todoInput = $todoItem.querySelector('input.edit_mode');
        const $todoEditButton = $todoItem.querySelector(
            '.todo_edit_confirm_button'
        );
        $todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                $todoEditButton.click();
            }
        });
    };

    // get, render & paginate todo

    const getTodo = () => {
        fetch(
            API_ENDPOINT +
                '?_page=' +
                currentPage +
                '&_per_page=' +
                ITEM_PER_PAGE
        )
            .then((res) => res.json())
            .then((data) => renderTodo(data))
            .catch((err) => console.error(err));
    };

    const renderTodo = (data) => {
        const todo = data['data'];
        const itemCount = data['items'];
        $todo.innerHTML = '';
        todo.forEach((e) => createTodoElement(e, $todo));
        todoId = itemCount;
        paginate(data);
    };

    const paginate = (data) => {
        let innerHTML = '';

        const pageCount = data['pages'];
        const prevPage = data['prev'];
        const nextPage = data['next'];

        let currentPageGroup = currentPage % PAGE_ON_SCREEN;
        if (currentPageGroup === 0) currentPageGroup = 5;
        const firstPageButton = currentPage - currentPageGroup + 1;
        const lastPageButton = Math.min(
            pageCount,
            currentPage - currentPageGroup + 5
        );

        if (prevPage > 0) {
            innerHTML += `<button class='pageToButton' data-page-to=${prevPage}>이전</button>`;
        } else {
            innerHTML += `<div class='empty'></div>`;
        }

        for (let i = firstPageButton; i <= lastPageButton; i++) {
            innerHTML += `<button class="pageButton" id="page_${i}">${i}</button>`;
        }

        if (nextPage > 0) {
            innerHTML += `<button class='pageToButton' data-page-to=${nextPage}>다음</button>`;
        } else {
            innerHTML += `<div class='empty'></div>`;
        }

        $pagination.innerHTML = innerHTML;
        $pagination.addEventListener('click', setChangePageEvent);

        const $currentPage = get(`.pageButton#page_${currentPage}`);
        $currentPage.style.color = '#fff';
        $currentPage.style.background = '#bad4f5';
    };

    const setChangePageEvent = (e) => {
        if (e.target.className === 'pageButton') {
            currentPage = Number(e.target.innerText);
        } else if (e.target.className === 'pageToButton') {
            currentPage = Number(e.target.dataset.pageTo);
        } else return;

        localStorage.setItem(CURRENT_PAGE_KEY, currentPage);
        getTodo();
    };

    // add todo

    const addTodo = (e) => {
        e.preventDefault();

        const input = $todoFormInput.value;
        if (!input) return;
        else $todoFormInput.value = '';

        const todo = {
            content: input,
            completed: false,
            id: `${++todoId}`,
        };

        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo),
        })
            .then(getTodo)
            .catch((err) => console.error(err));
    };

    // toggle todo checkbox

    const toggleTodo = (target) => {
        const itemId = target.closest('div.item').dataset.id;
        const completed = target.checked;
        fetch(API_ENDPOINT + '/' + itemId, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed }),
        })
            .then(getTodo)
            .catch((err) => console.error(err));
    };

    // change todo mode

    const changeMode = (target, mode) => {
        const $item = target.closest('div.item');
        if (mode === 'edit') {
            $item
                .querySelectorAll('.edit_mode')
                .forEach((e) => e.classList.remove('hide'));
            $item
                .querySelectorAll('.content_mode')
                .forEach((e) => e.classList.add('hide'));
        } else if (mode === 'content') {
            $item
                .querySelectorAll('.content_mode')
                .forEach((e) => e.classList.remove('hide'));
            $item
                .querySelectorAll('.edit_mode')
                .forEach((e) => e.classList.add('hide'));
            $item.querySelector('input.edit_mode').value =
                $item.querySelector('label.content_mode').innerHTML;
        }
    };

    // edit & remove todo

    const editTodo = (target) => {
        const $item = target.closest('div.item');
        const itemId = $item.dataset.id;
        const content = $item.querySelector('input.edit_mode').value;
        fetch(API_ENDPOINT + '/' + itemId, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        })
            .then(getTodo)
            .catch((err) => console.error(err));
    };

    const removeTodo = (target) => {
        const itemId = target.closest('div.item').dataset.id;
        fetch(API_ENDPOINT + '/' + itemId, { method: 'DELETE' })
            .then(getTodo)
            .catch((err) => console.error(err));
    };

    // init

    const init = () => {
        window.addEventListener('DOMContentLoaded', getTodo);
        $todoForm.addEventListener('submit', addTodo);
        $todo.addEventListener('click', (e) => {
            switch (e.target.className) {
                case 'todo_checkbox':
                    toggleTodo(e.target);
                    break;

                case 'todo_edit_button':
                    changeMode(e.target, 'edit');
                    break;
                case 'todo_edit_cancel_button':
                    changeMode(e.target, 'content');
                    break;

                case 'todo_edit_confirm_button':
                    editTodo(e.target);
                    break;
                case 'todo_remove_button':
                    removeTodo(e.target);
                    break;

                default:
                    break;
            }
        });
    };

    init();
})();
