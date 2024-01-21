import createCustomElement from "../utils/dom.js";
import CART_COOKIE_KEY from "../constants/cart.js";

const getCartToggleButton = (parentNode, productInfo) => {
    const cartButton = createCustomElement('button', {
        className: 'cart-toggle-btn', type: 'button', onclick: () => {
            if (isInCart(productInfo)) {
                if (confirm("이미 담긴 상품입니다. 상품을 장바구니에서 삭제하시겠습니까?")) {
                    cartImage.src = './public/assets/cart.png';
                    removeCartInfo(productInfo);
                }
            }
            else {
                cartImage.src = './public/assets/cartDisabled.png';
                addCartInfo(productInfo);
                if (confirm("장바구니에 상품을 담았습니다. 장바구니 페이지로 이동하시겠습니까?")) location = './cart.html';
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