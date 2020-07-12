export default class LeftTimer {
    constructor() {
        this._timer = 0;
    }

    set(fn, leftTime, immediately = true) {
        this.clear();
        if (immediately) fn(leftTime);
        this._timer = setInterval(() => {
            leftTime--;
            if (leftTime <= 0) this.clear();
            fn(leftTime);
        }, 1000);
        return () => this.clear();
    }

    clear() {
        clearInterval(this._timer);
    }
}
