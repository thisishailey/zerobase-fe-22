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

    // constants

    const API_ENDPOINT = 'http://localhost:3000/todo';
    const $todoForm = get('form.todo_form');
    const $todoFormInput = get('input.todo_input');
    const $todo = get('div.todo');
    let todoId;

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

        const $todoItem = createCustomElement('div', { className: 'item', innerHTML: innerHTML }, parentNode);
        $todoItem.dataset.id = id;

        setEditOnEnterEvent($todoItem);

        return $todoItem;
    }

    const setEditOnEnterEvent = ($todoItem) => {
        const $todoInput = $todoItem.querySelector('input.edit_mode');
        const $todoEditButton = $todoItem.querySelector('.todo_edit_confirm_button');
        $todoInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                $todoEditButton.click();
            }
        });
    }

    // render & get todo

    const renderTodo = (todo) => {
        $todo.innerHTML = '';
        todo.forEach(e => createTodoElement(e, $todo));
        todoId = todo[todo.length - 1]?.id || 0;
    }

    const getTodo = () => {
        fetch(API_ENDPOINT)
            .then((res) => res.json())
            .then((todo) => renderTodo(todo))
            .catch((err) => console.error(err));
    }

    // add todo

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

    // toggle todo checkbox

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

    // change todo mode

    const changeMode = (target, mode) => {
        const $item = target.closest('div.item');
        if (mode === 'edit') {
            $item.querySelectorAll('.edit_mode').forEach(e => e.classList.remove('hide'));
            $item.querySelectorAll('.content_mode').forEach(e => e.classList.add('hide'));
        } else if (mode === 'content') {
            $item.querySelectorAll('.content_mode').forEach(e => e.classList.remove('hide'));
            $item.querySelectorAll('.edit_mode').forEach(e => e.classList.add('hide'));
            $item.querySelector('input.edit_mode').value = $item.querySelector('label.content_mode').innerHTML;
        }
    }

    // edit & remove todo

    const editTodo = (target) => {
        const $item = target.closest('div.item');
        const itemId = $item.dataset.id;
        const content = $item.querySelector('input.edit_mode').value;
        fetch(API_ENDPOINT + '/' + itemId, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        })
            .then(getTodo)
            .catch((err) => console.error(err));
    }

    const removeTodo = (target) => {
        const itemId = target.closest('div.item').dataset.id;
        fetch(API_ENDPOINT + '/' + itemId, { method: 'DELETE' })
            .then(getTodo)
            .catch((err) => console.error(err));
    }


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
    }

    init();
})();