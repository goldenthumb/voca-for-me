import { parseHtml, cx, stringifyHtml } from '../lib/utils';
import './TextBox.scss';
import Loader from './Loader';

/**
 * @param {{ id?: string; size?: 'small' | 'large' }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function TextBox({ id, size } = {}, children) {
    return parseHtml(`
        <div 
            class="${cx(
                'text-box', 
                size && `text-box--${size}`
            )}"
            ${id ? `data-${id}` : ''}
        >
            ${children ? stringifyHtml(children) : Loader().outerHTML}
        </div>
    `);
}
