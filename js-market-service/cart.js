import getProductList from "./module/productList.js";
import { getCartInfo } from "./module/cartToggleButton.js";
import createCustomElement from "./utils/createElement.js";
import CART_INFO_KEY from "./constants/cartInfo.js";
import setPayInfo from "./module/cartCheckout.js";

const cartProductList = getCartInfo();
const parentNode = document.querySelector('section');
const siblingNode = document.querySelector('#cart-pay-container');

// create a product list and insert it in the parent node and before the sibling node
if (cartProductList.length < 1) {
    parentNode.insertBefore(
        createCustomElement('div', { className: 'product-list-con', innerHTML: '장바구니에 담긴 상품이 없습니다.' }, false),
        siblingNode
    );
} else {
    parentNode.insertBefore(
        getProductList(cartProductList, false),
        siblingNode
    );
}

// set the total pay info by calculating all items in the cart
setPayInfo();

// set an event handler to remove all items in the cart
document.querySelector('#remove-all-button').onclick = () => {
    if (confirm('상품을 모두 삭제하시겠습니까?')) {
        localStorage.removeItem(CART_INFO_KEY);
        location.reload();
    }
}