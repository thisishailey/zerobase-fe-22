import createCustomElement from "../utils/dom.js";
import CART_COOKIE_KEY from "../constants/cart.js";

const getCartToggleButton = (parentNode, productInfo) => {
    const cartButton = createCustomElement('button', {
        className: 'cart-toggle-btn', type: 'button', onclick: () => { addCartInfo(productInfo) }
    }, parentNode);
    createCustomElement('img', { className: 'cart-image', src: './public/assets/cart.png' }, cartButton);
}

const addCartInfo = (productInfo) => {
    const originalCookie = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

    if (originalCookie.some(e => e.id === productInfo.id)) return;

    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
        ...originalCookie,
        productInfo
    ]));
}

export { getCartToggleButton }