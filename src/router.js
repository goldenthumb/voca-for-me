export const PAGE = { INDEX: 'index', MAIN: 'main', END: 'end' };
const router = new (class {
    constructor() {
        this._fn = () => { };
        history.replaceState(null, null, '/');
    }

    getState() {
        return history.state;
    }

    /**
     * @param {'main' | 'end'} page
     * @param {any} [data]
     * */
    add(page, data) {
        history.pushState({ page, data }, null, `/?page="${page}"`);
        this._emit({ page, data });
    }

    on(fn) {
        this._fn = fn;
        window.addEventListener('popstate', ({ state }) => {
            this._emit(state || undefined);
        });
        this._emit();
    }

    go(index) {
        history.go(index);
    }

    forward() {
        history.forward();
    }

    back() {
        history.back();
    }

    _emit({ page = PAGE.INDEX, data } = {}) {
        this._fn({ page, data });
    }
})();

export default router;