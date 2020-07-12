export default class Store {
    constructor(initState) {
        this._state = initState;
        this._events = {};
        this._defer = null;
    }

    get state() {
        return this._state;
    }

    on(deps, listener) {
        deps.forEach((dep) => {
            (this._events[dep] = this._events[dep] || []).push(listener);
        });

        return () => {
            deps.forEach((dep) => {
                this._events[dep] = this._events[dep].filter((fn) => fn !== listener);
            });
        };
    }

    set(nextState) {
        for (const key of Object.keys(nextState)) {
            if (!hasOwn(this._state, key)) throw new Error(`State does not exist. (${key})`);
        }

        const prevState = { ...this._state };
        this._state = { ...this._state, ...nextState };

        if (!this._defer) {
            this._defer = Promise.resolve().then(() => {
                this._defer = null;
                for (const [key, fns] of Object.entries(this._events)) {
                    if (this._state[key] === prevState[key]) continue;
                    fns.forEach((fn) => fn(this._state));
                }
            });
        }
    }

    clear() {
        this._events = {};
    }
}

function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
