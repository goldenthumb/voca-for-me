import LeftTimer from './LeftTimer';

jest.useFakeTimers();

describe('leftTimer', () => {
    test('timer (immediately = false)', () => {
        const leftTimer = new LeftTimer();
        const callback = jest.fn();
        leftTimer.set(callback, 10, false);

        jest.advanceTimersByTime(10000);

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(10);
    });

    test('timer (immediately = true)', () => {
        const leftTimer = new LeftTimer();
        const callback = jest.fn();
        leftTimer.set(callback, 5);

        jest.advanceTimersByTime(5000);

        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(6);
    });
});
