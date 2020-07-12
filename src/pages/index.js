import router, { PAGE } from '../router';
import { $ } from '../lib/utils';

import App from '../components/App.js';
import TextBox from '../components/TextBox.js';
import Wrapper from '../components/Wrapper.js';
import Button from '../components/Button.js';

export default function index($root) {
    $root.appendChild(
        App({}, [
            TextBox({}, '나만의 단어 학습장'), 
            Wrapper({ center: true }, [
                Button({ id: 'start-btn' }, '시작')
            ])
        ])
    );

    $('[data-start-btn]').addEventListener('click', () => {
        router.move(PAGE.MAIN);
    });
}
