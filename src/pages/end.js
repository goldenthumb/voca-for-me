import router from '../router';
import { $ } from '../lib/utils';

import TextBox from '../components/TextBox.js';
import Wrapper from '../components/Wrapper.js';
import Button from '../components/Button.js';

export default function end($root) {
    $root.appendChild(
        Wrapper({}, [
            TextBox({ text: '종료 페이지' }),
            Wrapper({ spaceBetween: true }, [
                Button({ id: 'index-btn', text: '처음 페이지로 이동' }),
                Button({ id: 'main-btn', text: '메인 페이지로 이동' }),
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
