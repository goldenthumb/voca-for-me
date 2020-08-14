import { parseHtml, stringifyHtml, cx } from '../lib/utils';
import './Button.scss';

/**
 * @param {{ id?: string; size?: 'small' | 'large'; disabled: boolean; }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function Button({ id, size, disabled }, children) {
    return parseHtml(/*html*/`
        <button 
            class="${cx(
                'button',
                disabled && 'button--disabled',
                size && `button--${size}`,
            )}" 
            ${id ? `data-${id}` : ''}
        >
            ${stringifyHtml(children)}
        </button>
    `);
}
