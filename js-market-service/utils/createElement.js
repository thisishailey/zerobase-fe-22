const createCustomElement = (tagName, propertyMap, parentNode) => {
    const e = document.createElement(tagName);
    if (propertyMap) {
        Object.keys(propertyMap).forEach((key) => {
            e[key] = propertyMap[key];
        });
    }
    if (parentNode) parentNode.appendChild(e);
    return e;
}

export default createCustomElement;