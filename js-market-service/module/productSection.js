import getProductList from "./productList.js";
import createCustomElement from "../utils/dom.js";

const getProductSection = (sectionName, productInfoList, parentNode) => {
    const productSection = createCustomElement('section', { className: 'product-list-section' }, parentNode);
    const sectionTitle = createCustomElement('div', { className: 'section-title' }, productSection);
    createCustomElement('span', { className: 'section-title-highlight' }, sectionTitle);
    createCustomElement('span', { innerHTML: sectionName }, sectionTitle);
    getProductList(productInfoList, productSection);
}

export default getProductSection;