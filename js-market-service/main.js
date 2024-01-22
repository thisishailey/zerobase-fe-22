// main.js

import getProductSection from "./module/productSection.js";
import fetchSectionListData from "./module/fetchData.js";

try {
    const sectionListData = await fetchSectionListData();
    sectionListData.forEach(e => {
        getProductSection(e.sectionTitle, e.productList, document.body);
    });
} catch (error) {
    console.log(error);
}