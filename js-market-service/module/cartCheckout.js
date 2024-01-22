import { getCartInfo } from "./cartToggleButton.js";
import { FREE_DELIVERY, DELIVERY_FEE } from "../constants/deliveryFee.js";

const priceElements = {
    // store DOM elements in an Object
    originalPrice: document.querySelector('#original-price'),
    discountPrice: document.querySelector('#discount-price'),
    deliveryPrice: document.querySelector('#delivery-price'),
    totalPrice: document.querySelector('#total-price')
}

const setPayInfo = () => {
    // calculate the total of all cart items and set innerHTML accordingly

    const prices = {
        // values to be inserted in the innerHTML later (initial value = 0)
        originalPrice: 0,
        discountPrice: 0,
        deliveryPrice: 0,
        totalPrice: 0
    }

    getCartInfo().forEach((e) => {
        // loop through each cart items and calculate the price values
        prices.originalPrice += e.originalPrice;
        prices.discountPrice += e.originalPrice - e.price;
        prices.totalPrice += e.price;
    });

    if (0 < prices.totalPrice && prices.totalPrice < FREE_DELIVERY) {
        // if below the free delivery price, add a delivery fee
        prices.deliveryPrice = DELIVERY_FEE;
        prices.totalPrice += prices.deliveryPrice;
    }

    for (const [key, value] of Object.entries(priceElements)) {
        // loop through each elements and update its innerHTML
        value.innerHTML = prices[key].toLocaleString() + ' 원';
    }
}

export default setPayInfo;