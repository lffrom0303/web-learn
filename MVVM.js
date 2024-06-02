class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el);
    this._data = data;
    this.init();
  }
  init() {
    this.initData();
  }
  initData() {
    const _this = this;
    this.data = {};
    for (const key in this._data) {
      Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get() {
          return _this._data[key];
        },
        set(v) {
          _this._data[key] = v;
        },
      });
    }
  }
}
