import { parseHtml, cx, stringifyHtml } from '../lib/utils';
import './WordPanel.scss';
/**
 * @param {{ id?: string; }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function WordPanel({ id } = {}, children) {
    return parseHtml(/*html*/`
        <div class="${cx('word-panel')}" ${id ? `data-${id}` : ''}>
            ${stringifyHtml(children)}
        </div>
    `);
}
