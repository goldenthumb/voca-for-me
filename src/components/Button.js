import { parseHtml, stringifyHtml } from '../lib/utils';
import './Button.scss';

/**
 * @param {{ id?: string }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function Button({ id }, children) {
    return parseHtml(`
        <button class="button" ${id ? `data-${id}` : ''}>
            ${stringifyHtml(children)}
        </button>
    `);
}
