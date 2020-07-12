import { parseHtml } from '../lib/utils';
import './Loader.scss';

export default function Loader() {
    return parseHtml(`
        <div class="loader"></div>
    `);
}
