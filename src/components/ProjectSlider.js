import React from 'react';
import Swiper from 'react-id-swiper';
// Version <= 2.3.2
// import 'react-id-swiper/lib/styles/css/swiper.css';
// Version >= 2.4.0
import 'swiper/css/swiper.css';
import HackathonFormat from "./props/HackathonFormat";
const HobbyHeader = {
    fontSize: "3vw",
    textAlign: "center",
    marginTop : "0px",
    marginBottom: "-2vw",
    paddingTop: "5vw"
}
class ProjectSlider extends React.Component {
    render() {
        const params = {
            loop: true,
            centeredSlides: true,
            slidesPerView: '1',
            updateOnWindowResize: true,
            setWrapperSize: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                // el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 480px
                800: {
                  slidesPerView: 3
                },
                }
        }

        return (
            <div id = "projects">
                <h1 style={HobbyHeader}>Projects</h1>
                <Swiper {...params}>
                    <div>
                    <HackathonFormat 
            HackathonName = "FraserHacks"
            ProjectName = "MeshForm"
            linktodev = "https://devpost.com/software/meshform"
            linktogit = "https://github.com/SmilestheSad/MeshForm"
            hackathontext = "Created an app for FRC scouting events. After entering scouting information on your phone, 
            you can wirelessly transmit the data to other teammates using a QR code. Built using React Native and JavaScript."
                />
                        
                    </div>
                    <div>
                    <HackathonFormat 
            HackathonName = "HacktheNorth"
            ProjectName = "AllerVision"
            linktodev = "https://devpost.com/software/allervision"
            linktogit = "https://github.com/SmilestheSad/HTNFrontEnd"
            hackathontext = "Created an app that uses Google's Vision API to scan foods and detect potential allergies. 
            Built using React Native, Python, Flask and Edamam API."
                />
                    </div>
                    <div>
                    <HackathonFormat 
            HackathonName = "JamHacks"
            ProjectName = "The Jam Expansion"
            linktodev = "https://devpost.com/software/thejamexpansion"
            linktogit = "https://github.com/SmilestheSad/TheJamExpansion"
            hackathontext = "Created a dungeon crawler game with multiple levels using Python and Pygame."
            />
                    </div>
                    <div>
                    <HackathonFormat 
            HackathonName = "WolfHacks"
            ProjectName = "Globlate"
            linktodev = "https://devpost.com/software/wolfhacks19"
            linktogit = "https://github.com/SmilestheSad/wolfhacks19"
            hackathontext = "Messaging app with built to allow people who speak different languages to communicate with each other. 
            Built using Google Translate API, Firebase, JavaScript, HTML and CSS."
                />
                    </div>
                    <div>
                    <HackathonFormat 
            HackathonName = "TOHacks"
            ProjectName = "BadHabits"
            linktodev = "https://devpost.com/software/screamer"
            linktogit = "https://github.com/SmilestheSad/TOHacks2020"
            hackathontext = "Created an app that determines how much time you spend on apps you choose to monitor,
             and posts embarassing tweets of you using Twitter API when you spend too long on those apps."
                />
                    </div>
                </Swiper >
            </div >
        )
    }
}
export default ProjectSlider;