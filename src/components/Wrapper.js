import { parseHtml, cx, convertStringFromElements } from '../lib/utils';
import './Wrapper.scss';

/**
 * @param {{ center?: boolean, spaceBetween?: boolean }} props
 * @param {HTMLElement[]} elements
 * */
export default function Wrapper({ center, spaceBetween } = {}, elements = []) {
    return parseHtml(`
        <div 
            class="${cx(
                'wrapper',
                center && 'wrapper--center',
                spaceBetween && 'wrapper--space-between',
            )}"
        >
            ${convertStringFromElements(elements)}
        </div>
    `);
}
