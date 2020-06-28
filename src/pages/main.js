import router, { PAGE } from '../router';
import { $ } from '../lib/utils';

import TextBox from '../components/TextBox.js';
import Wrapper from '../components/Wrapper.js';
import Button from '../components/Button.js';

export default function main($root) {
    $root.appendChild(
        Wrapper({}, [
            TextBox({}, '메인 페이지'),
            Wrapper({ spaceBetween: true }, [
                Button({ id: 'index-btn' }, '처음 페이지로 이동'),
                Button({ id: 'end-btn' }, '종료 페이지로 이동'),
            ]),
        ]),
    );

    $('[data-index-btn]').addEventListener('click', () => {
        router.back();
    });

    $('[data-end-btn]').addEventListener('click', () => {
        router.move(PAGE.END);
    });
}
