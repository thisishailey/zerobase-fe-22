// main.js

import getProductList from "./module/productList.js";

getProductList(
    [
        {
            "id": 1,
            "imgSrc": "./public/assets/paprika.jpg",
            "name": "파프리카 2입",
            "discountPercent": 20,
            "price": 2000,
            "originalPrice": 2500
        },
        {
            "id": 2,
            "imgSrc": "./public/assets/carrot.jpg",
            "name": "친환경 당근 400g",
            "discountPercent": 33,
            "price": 2010,
            "originalPrice": 3000
        },
        {
            "id": 3,
            "imgSrc": "./public/assets/pumpkin.jpg",
            "name": "단호박 1통",
            "discountPercent": 12,
            "price": 3520,
            "originalPrice": 4000
        }
    ],
    document.body
);