const domParser = new DOMParser();
export function parseHtml(str) {
    const element = domParser.parseFromString(str.trim(), 'text/html').body.childNodes[0];
    element.innerHTML = element.innerHTML.trim();
    return element;
}

/** @param {HTMLElement[] | HTMLElement | string} children */
export function stringifyHtml(children) {
    if (typeof children === 'string') return children;
    return Array.isArray(children) ? 
        children.reduce((acc, ele) => (acc += ele.outerHTML.trim()), '') :
        children.outerHTML.trim();
}

export function $(selector, parent) {
    return (parent || document).querySelector(selector);
}

export function $$(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
}

export function cx(...classList) {
    return classList.filter(Boolean).join(' ');
}
