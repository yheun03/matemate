document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,

        navigation: {
          nextEl: '.gotoNext',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar', // 진행도 표시
        },
    });
});