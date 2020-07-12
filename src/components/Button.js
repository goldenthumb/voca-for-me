import { parseHtml, stringifyHtml, cx } from '../lib/utils';
import './Button.scss';

/**
 * @param {{ id?: string; size?: 'small' | 'large' }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function Button({ id, size }, children) {
    return parseHtml(`
        <button 
            class="${cx(
                'button', 
                size && `button--${size}`
            )}" 
            ${id ? `data-${id}` : ''}
        >
            ${stringifyHtml(children)}
        </button>
    `);
}
