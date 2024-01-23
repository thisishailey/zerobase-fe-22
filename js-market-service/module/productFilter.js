import getProductList from "./productList.js";
import createCustomElement from "../utils/createElement.js";

// get DOM elements
const minPriceFilter = document.querySelector('#price-min-filter');
const maxPriceFilter = document.querySelector('#price-max-filter');
const discountFilter = document.querySelector('#discount-filter');
const filterSearchButton = document.querySelector('.product-filter-con button');


// ------ main functions ------ //

// search button event handler
const setFilterSearchEvent = (productInfoList, parentNode) => {
    filterSearchButton.onclick = () => {
        // get input values
        const minPrice = convertPriceToNumber(minPriceFilter.value) || 0;
        const maxPrice = convertPriceToNumber(maxPriceFilter.value) || Number.MAX_SAFE_INTEGER;
        const discount = convertPercentToNumber(discountFilter.value) || 0;

        // filter the items using the input values
        const filteredList = productInfoList.filter(e => {
            return e.price >= minPrice && e.price <= maxPrice && e.discountPercent >= discount;
        });

        // remove the current items on the DOM
        document.querySelector('.product-list-con').remove();

        // append new product container with the filtered items
        if (filteredList.length > 0) {
            getProductList(filteredList, parentNode);
        } else {
            createCustomElement('div', { className: 'product-list-con empty', innerHTML: '해당 조건에 맞는 상품을 찾을 수 없습니다.' }, parentNode);
        }
    }
}

// search input event handler
const setSearchBarEvent = () => {
    // change the format when the filter inputs are focused (to number) or blurred (to formatted string)
    minPriceFilter.onblur = (e) => e.target.value = convertNumberToPrice(e.target.value, 'min');
    minPriceFilter.onfocus = (e) => e.target.value = convertPriceToNumber(e.target.value);
    maxPriceFilter.onblur = (e) => e.target.value = convertNumberToPrice(e.target.value, 'max');
    maxPriceFilter.onfocus = (e) => e.target.value = convertPriceToNumber(e.target.value);
    discountFilter.onblur = (e) => e.target.value = convertNumberToPercent(e.target.value);
    discountFilter.onfocus = (e) => e.target.value = convertPercentToNumber(e.target.value);
}


// ------ functions for setSearchBarEvent and setFilterSearchEvent ------ //

const convertNumberToPrice = (e, type) => {
    // receive a number and return a formatted string with ',' and '원'
    // return an empty string if the input is invalid

    if (e === '') return ''; // early return if the field is empty

    const result = Number(e);

    if (isNaN(result)) { // NaN test
        alert('숫자를 입력해 주세요.');
        return '';
    } else if (isOutOfRange(type, result)) { // range test
        type === 'min' ? alert('최대 금액 보다 같거나 작은 수로 입력해 주세요.') : alert('최소 금액 보다 같거나 큰 수로 입력해 주세요.');
        return '';
    } else { // return a formatted string
        return result.toLocaleString() + '원';
    }
}

const convertNumberToPercent = (e) => {
    // receive a number and return a formatted string with '%'
    // return an empty string if the input is invalid

    if (e === '') return ''; // early return if the field is empty

    const result = Number(e);

    if (isNaN(result)) { // NaN test
        alert('숫자를 입력해 주세요.');
        return '';
    } else if (result < 0 || result > 100) { // range test
        alert('0%부터 100%까지만 가능합니다.');
        return '';
    } else { // return a formatted string
        return result + '%';
    }
}

const convertPriceToNumber = (e) => {
    // receive a formatted string, remove ',' and '원' and return

    if (e === '') return ''; // early return if the field is empty

    const result = Number(e.replace(',', '').replace('원', ''));

    return isNaN(result) ? '' : result;
}

const convertPercentToNumber = (e) => {
    // receive a formatted string, remove '%' and return

    if (e === '') return ''; // early return if the field is empty

    const result = Number(e.replace('%', ''));

    return isNaN(result) ? '' : result;
}

const isOutOfRange = (type, n) => {
    // return true if the price is not in the right range relative to the min or max price value
    if (type === 'min') {
        const maxPrice = convertPriceToNumber(maxPriceFilter.value) || Number.MAX_SAFE_INTEGER;
        if (n > maxPrice) return true;
    } else if (type === 'max') {
        const minPrice = convertPriceToNumber(minPriceFilter.value) || 0;
        if (n < minPrice) return true;
    } else return false;
}

export { setFilterSearchEvent, setSearchBarEvent };