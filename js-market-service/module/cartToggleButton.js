import createCustomElement from "../utils/dom.js";
import CART_COOKIE_KEY from "../constants/cart.js";

const getCartToggleButton = (parentNode, productInfo) => {
    const cartButton = createCustomElement('button', {
        className: 'cart-toggle-btn', type: 'button', onclick: () => {
            if (isInCart(productInfo)) {
                cartImage.src = './public/assets/cart.png';
                removeCartInfo(productInfo);
            }
            else {
                cartImage.src = './public/assets/cartDisabled.png';
                addCartInfo(productInfo);
            }
        }
    }, parentNode);
    const cartImage = createCustomElement('img', {
        className: 'cart-image', src: isInCart(productInfo) ? './public/assets/cartDisabled.png' : './public/assets/cart.png'
    }, cartButton);
}

const addCartInfo = (productInfo) => {
    const originalCookie = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

    if (originalCookie.some(e => e.id === productInfo.id)) return;

    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
        ...originalCookie,
        productInfo
    ]));
}

const removeCartInfo = ({ id }) => {
    const originalCookie = JSON.parse(localStorage.getItem(CART_COOKIE_KEY));

    originalCookie.splice(originalCookie.findIndex(e => e.id === id), 1);

    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
        ...originalCookie
    ]));
}

const isInCart = ({ id }) => {
    const originalCookie = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];
    return originalCookie.some(e => e.id === id);
}

export { getCartToggleButton }