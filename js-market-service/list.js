// list.js

import fetchSectionListData from "./module/fetchData.js";
import getProductList from "./module/productList.js";
import { setFilterSearchEvent, setSearchBarEvent } from "./module/productFilter.js";

const sectionListData = await fetchSectionListData();
const productInfoList = [];
const parentNode = document.querySelector('section.product-list-section');

sectionListData.forEach(e => productInfoList.push(...e.productList));
getProductList(productInfoList, parentNode);

setFilterSearchEvent(productInfoList, parentNode);
setSearchBarEvent();