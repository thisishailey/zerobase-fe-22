const createCustomElement = (tagName, propertyMap, parentNode) => {
    // create a DOM element with the input tag
    const e = document.createElement(tagName);

    // set the element properties to the input properties if any
    if (propertyMap) {
        Object.keys(propertyMap).forEach((key) => {
            e[key] = propertyMap[key];
        });
    }

    // append the element to the parent node if any
    if (parentNode) parentNode.appendChild(e);

    // return the element
    return e;
}

export default createCustomElement;