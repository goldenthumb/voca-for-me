import './styles/index.scss';
import { $ } from './lib/utils';
import router, { PAGE } from './router';

import index from './pages/index';
import main from './pages/main';
import end from './pages/end';

const $root = $('#root');

router.on(({ page }) => {
    $root.innerHTML = '';

    switch (page) {
        case PAGE.INDEX:
            index($root);
            return;
        case PAGE.MAIN:
            main($root);
            return;
        case PAGE.END:
            end($root);
            return;
        default:
            index($root);
            return;
    }
});
