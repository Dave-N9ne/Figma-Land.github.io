const button = document.querySelector('#header-burger');
const nav = document.querySelector('#header-nav');

button.addEventListener ('click', function (event) {
    button.classList.toggle('_active');
    nav.classList.toggle('_active');
    document.body.classList.toggle('_lock');
})

window.addEventListener('DOMContentLoaded', () => {
    const resizableSwiper = (breakPoint,
                             swiperClass, 
                             swiperSettings, 
                             callback) => {
        let swiper;
        breakPoint = matchMedia(breakPoint);
        const enableSwiper = (className, settings) => {
            swiper = new Swiper(className, settings);
            if (callback) {
                callback(swiper);
            }
        }
        const checker = () => {
            if (breakPoint.matches) {
                const result = enableSwiper(swiperClass, swiperSettings);
                return result;
            }
            else {
                if (swiper !== undefined) {
                swiper.destroy(true, true);
            }
            return;
            }
        }
        breakPoint.addEventListener('change', checker);
        checker();
    }
    const foo = (instance) => {
        if (instance) {
            instance.on('slideChange', (event) => {
                console.log('mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };
    resizableSwiper (
        '(max-width: 767.98px)',
        '.swiper',
        {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
               },
            spaceBetween: 90
        },
        foo
    )
})