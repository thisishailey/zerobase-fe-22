import getProductList from "./productList.js";
import createCustomElement from "../utils/createElement.js";

const minPriceFilter = document.querySelector('#price-min-filter');
const maxPriceFilter = document.querySelector('#price-max-filter');
const discountFilter = document.querySelector('#discount-filter');
const filterSearchButton = document.querySelector('.product-filter-con button');

const setFilterSearchEvent = (productInfoList, parentNode) => {
    filterSearchButton.onclick = () => {
        const minPrice = convertPriceToNumber(minPriceFilter.value) || 0;
        const maxPrice = convertPriceToNumber(maxPriceFilter.value) || Number.MAX_SAFE_INTEGER;
        const discount = convertPercentToNumber(discountFilter.value) || 0;

        const filteredList = productInfoList.filter(e => {
            return e.price >= minPrice && e.price <= maxPrice && e.discountPercent >= discount;
        });

        document.querySelector('.product-list-con').remove();

        if (filteredList.length > 0) {
            getProductList(filteredList, parentNode);
        } else {
            createCustomElement('div', { className: 'product-list-con empty', innerHTML: '해당 조건에 맞는 상품을 찾을 수 없습니다.' }, parentNode);
        }
    }
}

const setSearchBarEvent = () => {
    minPriceFilter.onblur = (e) => e.target.value = convertNumberToPrice(e.target.value, 'min');
    minPriceFilter.onfocus = (e) => e.target.value = convertPriceToNumber(e.target.value);
    maxPriceFilter.onblur = (e) => e.target.value = convertNumberToPrice(e.target.value, 'max');
    maxPriceFilter.onfocus = (e) => e.target.value = convertPriceToNumber(e.target.value);
    discountFilter.onblur = (e) => e.target.value = convertNumberToPercent(e.target.value);
    discountFilter.onfocus = (e) => e.target.value = convertPercentToNumber(e.target.value);
}

const convertNumberToPrice = (e, type) => {
    if (e === '') return '';
    const result = Number(e);
    if (isNaN(result)) {
        alert('숫자를 입력해 주세요.');
        return '';
    } else if (testPrice(type, result)) {
        type === 'min' ? alert('최대 금액 보다 같거나 작은 수로 입력해 주세요.') : alert('최소 금액 보다 같거나 큰 수로 입력해 주세요.');
        return '';
    } else {
        return result.toLocaleString() + '원';
    }
}

const testPrice = (type, n) => {
    if (type === 'min') {
        const maxPrice = convertPriceToNumber(maxPriceFilter.value) || Number.MAX_SAFE_INTEGER;
        if (n > maxPrice) return true;
    } else if (type === 'max') {
        const minPrice = convertPriceToNumber(minPriceFilter.value) || 0;
        if (n < minPrice) return true;
    }
}

const convertPriceToNumber = (e) => {
    if (e === '') return '';
    const result = Number(e.replace(',', '').replace('원', ''));
    return isNaN(result) ? '' : result;
}

const convertNumberToPercent = (e) => {
    if (e === '') return '';
    const result = Number(e);
    if (isNaN(result)) {
        alert('숫자를 입력해 주세요.');
        return '';
    } else if (result < 0 || result > 100) {
        alert('0%부터 100%까지만 가능합니다.');
        return '';
    } else {
        return result + '%';
    }
}

const convertPercentToNumber = (e) => {
    if (e === '') return '';
    const result = Number(e.replace('%', ''));
    return isNaN(result) ? '' : result;
}

export { setFilterSearchEvent, setSearchBarEvent };

{/* <div class="product-filter-con">
    <div class="product-filter">
        <input id="price-min-filter" type='text' placeholder="최소 금액" />
    </div>
    <div class="product-filter">
        <input id="price-max-filter" type='text' placeholder="최대 금액" />
    </div>
    <div class="product-filter">
        <input id="discount-filter" type='text' placeholder="최소 할인율" />
    </div>
    <button type='button'>검색</button>
</div> */}