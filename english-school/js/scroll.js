class ScrollObserver {
    constructor(els, cl ,options) {
        this.els = document.querySelectorAll(els);
        this.cl = cl;
        const defaultOptions = {
            root: null,
            rootMargin: "0px 0px 0px 0px",
        }
        this.options = Object.assign(defaultOptions, options);
        this._init();
    }
    _init() {
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add(this.cl);
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove(this.cl);
                }
            });
        }
        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el => this.io.observe(el));
    }
    destroy() {
        this.io.disconnect();
    }
}