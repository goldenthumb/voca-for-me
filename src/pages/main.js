import router, { PAGE } from '../router';
import { $ } from '../lib/utils';
import LeftTimer from '../lib/LeftTimer';
import Store from '../lib/Store';

import App from '../components/App.js';
import Wrapper from '../components/Wrapper.js';
import Text from '../components/Text.js';
import TextBox from '../components/TextBox.js';
import Button from '../components/Button.js';

export default async function main($root) {
    $root.appendChild(
        App({}, [
            Wrapper({ spaceBetween: true }, [
                Wrapper({}, [Text({}, '남은 시간(초) : '), Text({ id: 'left-time' }, '0')]),
                Wrapper({}, [Text({}, '아는 단어 수 : '), Text({ id: 'score'}, '0')]),
            ]),
            TextBox({ id: 'word'}, ''),
            Wrapper({ spaceBetween: true }, [
                Button({ id: 'index-btn', size: 'small' }, '처음으로 이동'),
                Button({ id: 'end-btn', size: 'small' }, '알고 있어요'),
            ]),
        ]),
    );

    const $word = $('[data-word]');
    const $leftTime = $('[data-left-time]');
    
    const leftTimer = new LeftTimer();
    const store = new Store({
        selected: 0,
        leftTime: 0,
        words: [],
        solvedWords: [],
    });

    const { words } = await import('../words.js');
    store.set({ words});

    store.on(['selected', 'words'], ({ words, selected, solvedWords }) => {
        if (selected >= words.length) {
            store.clear();
            leftTimer.clear();
            router.move(PAGE.END, { solvedWords });
            return;
        }

        const { word, time } = words[selected];
        $word.textContent = word;
        leftTimer.set((leftTime) => store.set({ leftTime }), time);
    });

    store.on(['leftTime'], ({ leftTime, selected }) => {
        if (leftTime <= 0) {
            store.set({ selected: selected + 1 });
        }

        $leftTime.textContent = `${leftTime}초`;
    });

    $('[data-index-btn]').addEventListener('click', () => {
        router.back();
    });
}
