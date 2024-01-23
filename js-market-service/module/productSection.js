import getProductList from "./productList.js";
import createCustomElement from "../utils/createElement.js";

const getProductSection = (sectionName, productInfoList, parentNode) => {
    // create a section
    const productSection = createCustomElement('section', { className: 'product-list-section' }, parentNode);

    // create a section title
    const sectionTitle = createCustomElement('div', { className: 'section-title' }, productSection);
    createCustomElement('span', { className: 'section-title-highlight' }, sectionTitle);
    createCustomElement('span', { innerHTML: sectionName }, sectionTitle);

    // create a product list with the product info of the products in the section
    getProductList(productInfoList, productSection);

    // return the section
    return productSection;
}

export default getProductSection;