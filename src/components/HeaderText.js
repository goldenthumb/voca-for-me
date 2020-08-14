import { parseHtml, stringifyHtml } from '../lib/utils';
import './HeaderText.scss';

/**
 * @param {{ id?: string }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function HeaderText({ id }, children) {
    return parseHtml(/*html*/`
        <span class="header-text" ${id ? `data-${id}` : ''}>
            ${stringifyHtml(children)}
        </span>
    `);
}
