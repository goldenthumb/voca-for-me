import router, { PAGE } from '../router';
import { $ } from '../lib/utils';

import TextBox from '../components/TextBox.js';
import Wrapper from '../components/Wrapper.js';
import Button from '../components/Button.js';

export default function index($root) {
    $root.appendChild(
        Wrapper({}, [
            TextBox({ text: '처음 페이지' }),
            Wrapper({ center: true }, [
                Button({ id: 'start-btn', text: '메인 페이지로 이동' })
            ]),
        ]),
    );

    $('[data-start-btn]').addEventListener('click', () => {
        router.add(PAGE.MAIN);
    });
}
