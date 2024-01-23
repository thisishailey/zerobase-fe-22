import createCustomElement from "../utils/createElement.js";
import { getCartToggleButton } from "./cartToggleButton.js";

const getProductCard = (productInfo, parentNode) => {
    const { imgSrc, name, discountPercent, price, originalPrice } = productInfo;

    // product card
    const productCard = createCustomElement('div', { className: 'product-card' }, parentNode);

    // product image
    const productImageCon = createCustomElement('div', { className: 'product-image-con' }, productCard);
    createCustomElement('img', { src: imgSrc, alt: name }, productImageCon);
    getCartToggleButton(productImageCon, productInfo);

    // product description
    const productDescription = createCustomElement('div', { className: 'product-description' }, productCard);
    createCustomElement('div', { className: 'product-name', innerHTML: name }, productDescription);
    const productPriceCon = createCustomElement('div', { className: 'product-price-con' }, productDescription);
    createCustomElement('div', { className: 'product-discount-percent', innerHTML: discountPercent + '%' }, productPriceCon);
    createCustomElement('div', { className: 'product-price', innerHTML: price.toLocaleString() + '원' }, productPriceCon);
    createCustomElement('div', { className: 'product-original-price', innerHTML: originalPrice.toLocaleString() + '원' }, productDescription);

    return productCard;
}

export default getProductCard;