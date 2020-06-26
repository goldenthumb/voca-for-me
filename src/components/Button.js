import { parseHtml } from '../lib/utils';
import './Button.scss';

/** @param {{ id?: string, text: string }} props */
export default function Button({ id, text }) {
    return parseHtml(`
        <button class="button" ${id ? `data-${id}` : ''}>
            ${text}
        </button>
    `);
}
