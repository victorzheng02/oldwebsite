import React from 'react';
import Swiper from 'swiper'
import '../../css/swiper.min.css'
import SimpleSwiper from './SimpleSwiper'
const ImageFormat = {
  width: "100%",
  height: "100%"
}
const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
let BoxFormat = (props) => {
  return (
    <div>
    <SimpleSwiper/>
      </div>

  )
}

export default BoxFormat