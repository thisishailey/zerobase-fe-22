import getProductSection from "./module/productSection.js";
import fetchSectionListData from "./module/fetchData.js";

// fetch data, create a product section and append to the document body
try {
    const sectionListData = await fetchSectionListData();
    sectionListData.forEach(e => {
        getProductSection(e.sectionTitle, e.productList, document.body);
    });
} catch (error) {
    console.log(error);
}