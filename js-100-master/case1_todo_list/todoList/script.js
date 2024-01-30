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

    const createTodoElement = (item, parentNode) => {
        const { id, content } = item;
        const innerHTML = `
            <div class="content">
              <input
                type="checkbox"
                class='todo_checkbox' 
              />
              <label>${content}</label>
              <input type="text" value="${content}" />
            </div>
            <div class="item_buttons content_buttons">
              <button class="todo_edit_button">
                <i class="far fa-edit"></i>
              </button>
              <button class="todo_remove_button">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
            <div class="item_buttons edit_buttons">
              <button class="todo_edit_confirm_button">
                <i class="fas fa-check"></i>
              </button>
              <button class="todo_edit_cancel_button">
                <i class="fas fa-times"></i>
              </button>
            </div>
        `;

        const $todoItem = createCustomElement('div', { className: 'item', innerHTML: innerHTML }, parentNode);
        $todoItem.dataset.id = id;

        return $todoItem;
    }

    const renderTodo = (todo) => {
        const $todo = get('.todo');
        $todo.innerHTML = '';
        todo.forEach(e => createTodoElement(e, $todo));
    }

    const getTodo = () => {
        fetch('http://localhost:3000/todo')
            .then((res) => res.json())
            .then((todo) => renderTodo(todo))
            .catch((err) => console.error(err));
    }

    const init = () => {
        window.addEventListener('DOMContentLoaded', () => {
            getTodo();
        });
    }

    init();
})();