; (function () {
    'use strict';

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

    const API_ENDPOINT = 'http://localhost:3000/todo';
    const $todoForm = get('form.todo_form');
    const $todoFormInput = get('input.todo_input');
    const $todo = get('div.todo');
    let todoId;

    const createTodoElement = (item, parentNode) => {
        const { id, content, completed } = item;
        const isChecked = completed ? 'checked' : '';
        const innerHTML = `
            <div class='content'>
                <input type='checkbox' class='todo_checkbox' ${isChecked} />
                <label>${content}</label>
                <input type='text' value=${content} />
            </div>
            <div class='item_buttons content_buttons'>
                <button class='todo_edit_button'>
                    <i class='far fa-edit'></i>
                </button>
                <button class='todo_remove_button'>
                    <i class='far fa-trash-alt'></i>
                </button>
            </div>
            <div class='item_buttons edit_buttons'>
                <button class='todo_edit_confirm_button'>
                    <i class='fas fa-check'></i>
                </button>
                <button class='todo_edit_cancel_button'>
                    <i class='fas fa-times'></i>
                </button>
            </div>
        `;

        const $todoItem = createCustomElement('div', { className: 'item', innerHTML: innerHTML }, parentNode);
        $todoItem.dataset.id = id;

        return $todoItem;
    }

    const renderTodo = (todo) => {
        $todo.innerHTML = '';
        todo.forEach(e => createTodoElement(e, $todo));
        todoId = todo[todo.length - 1].id;
    }

    const getTodo = () => {
        fetch(API_ENDPOINT)
            .then((res) => res.json())
            .then((todo) => renderTodo(todo))
            .catch((err) => console.error(err));
    }

    const addTodo = (e) => {
        e.preventDefault();

        const input = $todoFormInput.value;
        if (!input) return;

        const todo = {
            content: input,
            completed: false,
            id: `${++todoId}`
        };

        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        });
    }

    const toggleTodo = (target) => {
        const itemId = target.closest('div.item').dataset.id;
        const completed = target.checked;
        fetch(API_ENDPOINT + '/' + itemId, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed })
        })
            .then(getTodo)
            .catch((err) => console.error(err));
    }

    const init = () => {
        window.addEventListener('DOMContentLoaded', getTodo);
        $todoForm.addEventListener('submit', addTodo);
        $todo.addEventListener('click', (e) => {
            if (e.target.className === 'todo_checkbox') toggleTodo(e.target);
        });
    }

    init();
})();