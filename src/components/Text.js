import { parseHtml, stringifyHtml } from '../lib/utils';
import './Text.scss';

/**
 * @param {{ id?: string }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function Text({ id }, children) {
    return parseHtml(`
        <span class="text" ${id ? `data-${id}` : ''}>
            ${stringifyHtml(children)}
        </span>
    `);
}
