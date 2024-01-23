import createCustomElement from "../utils/createElement.js";
import getProductCard from "./productCard.js";

const getProductList = (productInfoList, parentNode) => {
    // create product cards for each product info, append to the product list container and return the container
    const productListContainer = createCustomElement('div', { className: 'product-list-con' }, parentNode);
    productInfoList.forEach((info) => {
        getProductCard(info, productListContainer);
    });
    return productListContainer;
}

export default getProductList;