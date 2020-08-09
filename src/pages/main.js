import router, { PAGE } from '../router';
import { $ } from '../lib/utils';
import LeftTimer from '../lib/LeftTimer';
import Store from '../lib/Store';

import App from '../components/App.js';
import Wrapper from '../components/Wrapper.js';
import HeaderText from '../components/HeaderText.js';
import WordPanel from '../components/WordPanel.js';
import Word from '../components/Word.js';
import Button from '../components/Button.js';

export default function main($root) {
    $root.appendChild(
        App({}, [
            Wrapper({ spaceBetween: true }, [
                Wrapper({}, [HeaderText({}, '남은 시간(초) : '), HeaderText({ id: 'left-time' }, '0')]),
                Wrapper({}, [HeaderText({}, '아는 단어 수 : '), HeaderText({ id: 'score'}, '0')]),
            ]),
            WordPanel({}, [
                Word({ id: 'word', loading: true }, ''), Word({ id: 'meaning', size: 'small' }, ''),
            ]),
            Wrapper({ spaceBetween: true }, [
                Button({ id: 'move-index', size: 'small' }, '처음으로 이동'),
                Button({ id: 'check-word', size: 'small' }, '알고 있어요'),
            ]),
        ]),
    );

    const leftTimer = new LeftTimer();
    const store = new Store({
        second: 0,
        selected: 0,
        leftTime: 0,
        words: [],
        checkedWords: [],
    });

    (async () => {
        const { config: { second, words } } = await import('../../config.js');
        store.set({ second, words });
    })();

    store.on(['selected', 'words'], ({ second, words, selected, checkedWords }) => {
        if (selected >= words.length) {
            store.clear();
            leftTimer.clear();
            router.move(PAGE.END, { words, checkedWords });
            return;
        }
        
        const { word, meaning } = words[selected];
        $('[data-word]').textContent = word;
        $('[data-meaning]').textContent = meaning;
        leftTimer.set((leftTime) => store.set({ leftTime }), second);
    });

    store.on(['leftTime'], ({ leftTime, selected }) => {
        if (leftTime <= 0) {
            store.set({ selected: selected + 1 });
        }

        $('[data-left-time]').textContent = `${leftTime}초`;
    });

    store.on(['checkedWords'], ({ checkedWords }) => {
        $('[data-score]').textContent = `${checkedWords.length}`;
    });

    $('[data-move-index]').addEventListener('click', () => {
        router.back();
    });

    $('[data-check-word]').addEventListener('click', () => {
        const { words, selected, checkedWords } = store.state;
        
        store.set({
            selected: selected + 1,
            checkedWords: [
                ...checkedWords, 
                words[selected]
            ]
        });
    });
}
