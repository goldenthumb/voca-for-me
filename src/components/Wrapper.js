import { parseHtml, cx, stringifyHtml } from '../lib/utils';
import './Wrapper.scss';

/**
 * @param {{ center?: boolean, spaceBetween?: boolean }} props
 * @param {HTMLElement[] | HTMLElement | string} children
 * */
export default function Wrapper({ center, spaceBetween } = {}, children) {
    return parseHtml(`
        <div 
            class="${cx(
                'wrapper', 
                center && 'wrapper--center', 
                spaceBetween && 'wrapper--space-between'
            )}"
        >
            ${stringifyHtml(children)}
        </div>
    `);
}
