const reasonLeft = document.querySelector('.reason__body-left');
const reasonRight = document.querySelector('.reason__body-right');
const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('scroll-in');
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('scroll-in');
            }
        });
}
const options = {
    root: null,
    rootMargin: "0px 0px -200px 0px",
}
const io = new IntersectionObserver(cb, options);
io.observe(reasonLeft);
io.observe(reasonRight);