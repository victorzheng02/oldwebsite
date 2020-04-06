import React from 'react';
import Swiper from 'react-id-swiper';
// Version <= 2.3.2
// import 'react-id-swiper/lib/styles/css/swiper.css';
// Version >= 2.4.0
import 'swiper/css/swiper.css';

const SimpleSwiperWithParams = () => {
    const params = {
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '3',
        pagination: {
            el: '.swiper-pagination',
            // el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    }

    return (
        <Swiper {...params}>
            <div >
            <div class="hobbyitem">
                start from here
                replace this with some kind of html code
                Slide 1
                </div>
        </div>
        <div >
            <div class="hobbyitem">
                start from here
                replace this with some kind of html code
                Slide 2
                </div>
        </div>
           <div class="hobbyitem">
                start from here
                replace this with some kind of html code
                Slide 1
        </div>
            <div class="hobbyitem">
                start from here
                replace this with some kind of html code
                Slide 1
        </div>
            <div class="hobbyitem">
                start from here
                replace this with some kind of html code
                Slide 1
        </div>
        </Swiper>
    )
}
export default SimpleSwiperWithParams;