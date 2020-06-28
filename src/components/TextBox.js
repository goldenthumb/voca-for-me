import { parseHtml, cx, stringifyHtml } from '../lib/utils';
import './TextBox.scss';

/**
 * @param {{ size?: 'small' | 'large' }} [props]
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function TextBox({ size } = {}, children) {
    return parseHtml(`
        <div 
            class="${cx(
                'text-box', 
                size && `text-box--${size}`
            )}" 
        >
            ${stringifyHtml(children)}
        </div>
    `);
}
