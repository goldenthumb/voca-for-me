const domParser = new DOMParser();
export function parseHtml(str) {
    const element = domParser.parseFromString(str.trim(), 'text/html').body.childNodes[0];
    element.innerHTML = element.innerHTML.trim();
    return element;
}

export function convertStringFromElements(elements) {
    return elements.reduce((acc, ele) => (acc += ele.outerHTML.trim()), '');
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

