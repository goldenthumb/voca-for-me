import router from '../router';
import { $ } from '../lib/utils';

import App from '../components/App.js';
import Word from '../components/Word.js';
import Wrapper from '../components/Wrapper.js';
import Button from '../components/Button.js';

export default function end($root) {
    $root.appendChild(
        App({}, [
            Word({}, '종료 페이지'),
            Wrapper({ spaceBetween: true }, [
                Button({ id: 'index-btn', size: 'small' }, '처음으로'),
                Button({ id: 'main-btn', size: 'small' }, '다시하기'),
            ]),
        ]),
    );

    $('[data-index-btn]').addEventListener('click', () => {
        router.go(-2);
    });

    $('[data-main-btn]').addEventListener('click', () => {
        router.back();
    });
}
