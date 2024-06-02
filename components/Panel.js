class Panel {
    constructor(state, element) {
        this.element = element;
        this.state  = state;
        document.addEventListener('rhythmTick', this.update.bind(this));
    }
    update(e) {
        // 子クラスでオーバーライド
    }
}