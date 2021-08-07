import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import HackathonFormat from "./props/HackathonFormat";

SwiperCore.use([Navigation]);
class ProjectSlider extends React.Component {
  render() {
    const params = {
      modules: [Navigation],
      loop: true,
      centeredSlides: true,
      slidesPerView: "1",
      updateOnWindowResize: true,
      setWrapperSize: true,
      spaceBetween: 10,
      navigation: true,
      breakpoints: {
        800: {
          slidesPerView: 3,
        },
      },
    };

    return (
      <div id="projects">
        <h1 id="hobbyhead">Projects</h1>
        <div id="swiper-container">
          <Swiper {...params}>
            <SwiperSlide>
              <HackathonFormat
                HackathonName="FraserHacks"
                ProjectName="MeshForm"
                linktodev="https://devpost.com/software/meshform"
                linktogit="https://github.com/SmilestheSad/MeshForm"
                hackathontext="Created an app for FRC scouting events. After entering scouting information on your phone, 
            you can wirelessly transmit the data to other teammates using a QR code. Built using React Native and JavaScript."
              />
            </SwiperSlide>
            <SwiperSlide>
              <HackathonFormat
                HackathonName="Hack the North 2020++"
                ProjectName="ohmi"
                linktodev="https://devpost.com/software/ohmi"
                linktogit="https://github.com/SmilestheSad/ohmi"
                hackathontext="Created a web app using React and Firebase that allows you to synchronously send your friends 
            favours in real time. Favours are stored in firebase and can be accessed after you login."
              />
            </SwiperSlide>
            <SwiperSlide>
              <HackathonFormat
                HackathonName="QHacks"
                ProjectName="BadGIF"
                linktodev="https://devpost.com/software/badgif"
                linktogit="https://github.com/SmilestheSad/QHacks2021-BADGIF"
                hackathontext="Developed a discord bot that will analyze your messages' sentiments using GCP's
            NL API, then sends a GIF that conveys the opposite of your emotion."
              />
            </SwiperSlide>
            <SwiperSlide>
              <HackathonFormat
                HackathonName="Hack the North 2019"
                ProjectName="AllerVision"
                linktodev="https://devpost.com/software/allervision"
                linktogit="https://github.com/SmilestheSad/HTNFrontEnd"
                hackathontext="Created an app that uses Google's Vision API to scan foods and detect potential allergies. 
            Built using React Native, Python, Flask and Edamam API."
              />
            </SwiperSlide>
            <SwiperSlide>
              <HackathonFormat
                HackathonName="WolfHacks"
                ProjectName="Globlate"
                linktodev="https://devpost.com/software/wolfhacks19"
                linktogit="https://github.com/SmilestheSad/wolfhacks19"
                hackathontext="Messaging app with built to allow people who speak different languages to communicate with each other. 
            Built using Google Translate API, Firebase, JavaScript, HTML and CSS."
              />
            </SwiperSlide>
            <SwiperSlide>
              <HackathonFormat
                HackathonName="TOHacks"
                ProjectName="BadHabits"
                linktodev="https://devpost.com/software/screamer"
                linktogit="https://github.com/SmilestheSad/TOHacks2020"
                hackathontext="Created an app that determines how much time you spend on apps you choose to monitor,
             and posts embarassing tweets of you using Twitter API when you spend too long on those apps."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }
}
export default ProjectSlider;
