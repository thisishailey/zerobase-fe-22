import createCustomElement from '../utils/dom.js';
import getProductCard from './productCard.js';

const getProductList = (productInfoList, parentNode) => {
    const productListContainer = createCustomElement('div', { className: 'product-list-con' }, parentNode);
    productInfoList.forEach((info) => {
        getProductCard(info, productListContainer);
    });
    return productListContainer;
}

export default getProductList;