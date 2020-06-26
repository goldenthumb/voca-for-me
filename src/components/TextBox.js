import { parseHtml, cx, convertStringFromElements } from '../lib/utils';
import './TextBox.scss';

/**
 * @param {{ size?: 'small' | 'large' }} props
 * @param {HTMLElement[]} elements
 * */
export default function TextBox({ size, text } = {}, elements = []) {
    return parseHtml(`
        <div 
            class="${cx(
                'text-box', 
                size && `text-box--${size}`
            )}" 
        >
            ${elements.length ? convertStringFromElements(elements) : text}
        </div>
    `);
}
