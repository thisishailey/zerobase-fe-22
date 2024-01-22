// main.js

import getProductSection from "./module/productSection.js";

try {
    const res = await fetch('./public/mock/sectionListData.json');
    const data = await res.json();
    data.sectionInfoList.forEach(e => {
        getProductSection(e.sectionTitle, e.productList, document.body);
    });
} catch (error) {
    console.log(error);
}