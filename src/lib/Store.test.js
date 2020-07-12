import Store from './Store';

describe('Store', () => {
    test('initialize', () => {
        const INIT_STATE = {
            test: 'test',
            words: ['test', 'test2'],
        };

        const store = new Store(INIT_STATE);
        expect(store.state).toEqual(INIT_STATE);
    });

    test('defer task', () => {
        const store = new Store({ score: 0 });
        const callback = jest.fn();

        store.on(['score'], callback);
        store.set({ score: 1 });
        store.set({ score: 2 });
        store.set({ score: 3 });
        store.set({ score: 4 });
        store.set({ score: 5 });

        Promise.resolve().then(() => {
            expect(callback).toBeCalledTimes(1);
            expect(store.state.score).toBe(5);
        });
    });

    test('remove listener', () => {
        const store = new Store({ test: 0 });
        const callback = jest.fn();
        const clearEvent = store.on(['test'], callback);

        store.set({ test: 3 });
        store.set({ test: 4 });
        store.set({ test: 5 });

        clearEvent();

        Promise.resolve().then(() => {
            expect(callback).toBeCalledTimes(0);
        });
    });
});
