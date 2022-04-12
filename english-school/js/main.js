document.addEventListener('DOMContentLoaded', function () {
    const so = new ScrollObserver('.so', 'scroll-in', {rootMargin: "0px 0px -200px 0px"});
    const bl = new ScrollObserver('.review-person__inner', 'balloonReview', {rootMargin: "0px 0px -120px 0px"});
});
