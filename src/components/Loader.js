import { parseHtml } from '../lib/utils';
import './Loader.scss';

export default function Loader() {
    return parseHtml(/*html*/`
        <div class="loader"></div>
    `);
}
