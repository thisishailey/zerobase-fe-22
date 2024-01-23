import fetchSectionListData from "./module/fetchData.js";
import getProductList from "./module/productList.js";
import { setFilterSearchEvent, setSearchBarEvent } from "./module/productFilter.js";

const sectionListData = await fetchSectionListData();
const parentNode = document.querySelector('section.product-list-section');

// gather all product lists (regardless of the sections) in a single array (productInfoList)
const productInfoList = [];
sectionListData.forEach(e => productInfoList.push(...e.productList));

// create a product list and append to the parent node
getProductList(productInfoList, parentNode);

// set event handlers
setFilterSearchEvent(productInfoList, parentNode);
setSearchBarEvent();