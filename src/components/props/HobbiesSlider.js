import React from 'react';
import Swiper from 'react-id-swiper';
// Version <= 2.3.2
// import 'react-id-swiper/lib/styles/css/swiper.css';
// Version >= 2.4.0
import 'swiper/css/swiper.css';
import HobbiesFormat from './HobbiesFormat'

const HobbyHeader = {
    fontSize: "4vw"
}
const HobbiesSlider = () => {
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
        <div>
        <h1 style= {HobbyHeader}>Hobbies and Extracurriculars</h1>
        <Swiper {...params}>
            <div >
            <div class="hobbyitem">
        <img src={require("../../images/modelun.png")} alt="munlogo" width = "20%" height = "20%" class = "centered"/>
        </div>
        <div class="hobbyitem">
        <img src={require("../../images/robotics.jpg")} alt="munlogo" width = "20%" height = "20%" class = "centered"/>
        <h1> Here is Robotics</h1>
        </div>
        <div class="hobbyitem">
        <img src={require("../../images/modelun.png")} alt="munlogo" width = "20%" height = "20%" class = "centered"/>
        <h1> Here is Badminton</h1>
        </div>
        <div class="hobbyitem">
        <img src={require("../../images/modelun.png")} alt="munlogo" width = "20%" height = "20%" class = "centered"/>
        <h1> Here is MEDLIFE</h1>
        </div>
        </div>
        </Swiper>
        </div>
    )
}
export default HobbiesSlider;