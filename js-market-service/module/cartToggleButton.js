import createCustomElement from "../utils/createElement.js";
import CART_INFO_KEY from "../constants/cartInfo.js";


// ------ main functions ------ //

const getCartToggleButton = (parentNode, productInfo) => {
    // create and return a cart toggle button

    const cartButton = createCustomElement('button', {
        className: 'cart-toggle-btn',
        type: 'button',
        onclick: cartButtonClicked
    }, parentNode);

    const cartImage = createCustomElement('img', {
        className: 'cart-image',
        // use different cart images based on whether the item is in the cart or not
        src: isInCart(productInfo) ? './public/assets/cartDisabled.png' : './public/assets/cart.png'
    }, cartButton);

    const cartButtonClicked = () => {
        if (isInCart(productInfo)) {
            // delete the item if it is already in the cart
            if (confirm('이미 담긴 상품입니다. 상품을 장바구니에서 삭제하시겠습니까?')) {
                cartImage.src = './public/assets/cart.png';
                removeCartInfo(productInfo);
                // reload only at the cart page (to refresh the items displayed in the cart)
                if (location.href.endsWith('/cart.html')) location.reload();
            }
        } else {
            // add the item if it is not in the cart
            cartImage.src = './public/assets/cartDisabled.png';
            addCartInfo(productInfo);
            // ask to move to the cart page
            if (confirm('장바구니에 상품을 담았습니다. 장바구니 페이지로 이동하시겠습니까?')) location = './cart.html';
        }
    }

    return cartButton;
}

// get items in the cart as an object (if empty, return an empty array)
const getCartInfo = () => JSON.parse(localStorage.getItem(CART_INFO_KEY)) || [];


// ------ functions for getCartToggleButton ------ //

const addCartInfo = (productInfo) => {
    const originalData = getCartInfo();
    // if the new item to be added is already in the cart, nothing happens
    if (originalData.some(e => e.id === productInfo.id)) return;
    // otherwise, update the data with the original data + the new item 
    localStorage.setItem(CART_INFO_KEY, JSON.stringify([...originalData, productInfo]));
}

const removeCartInfo = ({ id }) => {
    // remove the item from the cart and update it to the localStorage
    const originalData = getCartInfo();
    originalData.splice(originalData.findIndex(e => e.id === id), 1);
    localStorage.setItem(CART_INFO_KEY, JSON.stringify([...originalData]));
}

const isInCart = ({ id }) => {
    // return the Boolean value of whether the item is in the cart or not
    const originalData = getCartInfo();
    return originalData.some(e => e.id === id);
}

export { getCartToggleButton, getCartInfo }