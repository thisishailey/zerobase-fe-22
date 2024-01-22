import { getCartInfo } from "./cartToggleButton.js";
import { FREE_DELIVERY, DELIVERY_FEE } from "../constants/deliveryFee.js";

const priceElements = {
    originalPrice: document.querySelector('#original-price'),
    discountPrice: document.querySelector('#discount-price'),
    deliveryPrice: document.querySelector('#delivery-price'),
    totalPrice: document.querySelector('#total-price')
}

const setPayInfo = () => {
    const prices = {
        originalPrice: 0,
        discountPrice: 0,
        deliveryPrice: 0,
        totalPrice: 0
    }
    getCartInfo().forEach((e) => {
        prices.originalPrice += e.originalPrice;
        prices.discountPrice += e.originalPrice - e.price;
        prices.totalPrice += e.price;
    });
    if (0 < prices.totalPrice && prices.totalPrice < FREE_DELIVERY) {
        prices.deliveryPrice = DELIVERY_FEE;
        prices.totalPrice += prices.deliveryPrice;
    }
    for (const [key, value] of Object.entries(priceElements)) {
        value.innerHTML = prices[key].toLocaleString() + ' 원';
    }
}

export default setPayInfo;