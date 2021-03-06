import router, { PAGE } from '../router';
import { $ } from '../lib/utils';

import App from '../components/App.js';
import Word from '../components/Word.js';
import WordPanel from '../components/WordPanel.js';
import Wrapper from '../components/Wrapper.js';
import Button from '../components/Button.js';

export default function index($root) {
    $root.appendChild(
        App({}, [
            WordPanel({}, [
                Word({ size: 'large' }, '나만의 단어 학습장'),
            ]),
            Wrapper({ spaceBetween: true }, [
                Button({ id: 'start-btn' }, '학습하기'),
                Button({ id: 'start-btn', disabled: true }, '문제풀기')
            ])
        ])
    );

    $('[data-start-btn]').addEventListener('click', () => {
        router.move(PAGE.MAIN);
    });
}
