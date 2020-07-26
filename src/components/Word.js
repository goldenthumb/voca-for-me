import { parseHtml, cx, stringifyHtml } from '../lib/utils';
import './Word.scss';
import Loader from './Loader';

/**
 * @param {{ 
 * id?: string;
 * size?: 'small' | 'normal' | 'large';
 * loading?: boolean;
 * }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function Word({ id, size = 'normal', loading = false } = {}, children) {
    return parseHtml(`
        <div 
            class="${cx(
                'word', 
                `word--${size}`
            )}"
            ${id ? `data-${id}` : ''}
        >
            ${loading && !children ? Loader().outerHTML : stringifyHtml(children)}
        </div>
    `);
}
