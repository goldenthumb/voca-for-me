import { parseHtml, stringifyHtml, cx } from '../lib/utils';
import './App.scss';

/**
 * @param {{ id?: string }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function App({ id }, children) {
    return parseHtml(`
        <div class="${cx('app', 'layout')}" ${id ? `data-${id}` : ''}>
            <div class="panel">
                ${stringifyHtml(children)}
            </div>
        </div>
    `);
}
