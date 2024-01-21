import createCustomElement from '../utils/dom.js';

const getProductCard = ({ imgSrc, name, discountPercent, price, originalPrice }, parentNode) => {
    // <<<<< product card
    const productCard = createCustomElement('div', { className: 'product-card' }, parentNode);

    // <<<<< product image
    const productImageCon = createCustomElement('div', { className: 'product-image-con' }, productCard);
    const itemImage = createCustomElement('img', { src: imgSrc, alt: name }, productImageCon);
    const cartButton = createCustomElement('button', { className: 'cart-toggle-btn', type: 'button' }, productImageCon);
    const cartImage = createCustomElement('img', { className: 'cart-image', src: './public/assets/cart.png' }, cartButton);
    // product image >>>>>

    // <<<<< product description
    const productDescription = createCustomElement('div', { className: 'product-description' }, productCard);
    const productName = createCustomElement('div', { className: 'product-name', innerHTML: name }, productDescription);
    const productPriceCon = createCustomElement('div', { className: 'product-price-con' }, productDescription);
    const productDiscount = createCustomElement('div', { className: 'product-discount-percent', innerHTML: `${discountPercent}%` }, productPriceCon);
    const productPrice = createCustomElement('div', { className: 'product-price', innerHTML: `${price.toLocaleString()}원` }, productPriceCon);
    const productOriginalPrice = createCustomElement('div', { className: 'product-original-price', innerHTML: `${originalPrice.toLocaleString()}원` }, productDescription);
    // product description >>>>>

    // product card >>>>>
}

export default getProductCard;