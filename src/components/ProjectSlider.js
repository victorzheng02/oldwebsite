import React from 'react';
import Swiper from 'react-id-swiper';
// Version <= 2.3.2
// import 'react-id-swiper/lib/styles/css/swiper.css';
// Version >= 2.4.0
import 'swiper/css/swiper.css';
import HobbiesFormat from './props/HobbiesFormat'
import HackathonFormat from "./props/HackathonFormat";
const HobbyHeader = {
    fontSize: "4vw",
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
            slidesPerView: '3',
            updateOnWindowResize: true,
            setWrapperSize: true,
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination',
                // el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                
            },
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
            you can wirelessly transmit the data to other teammates using a QR code. Built using react native and javascript."
                />
                        
                    </div>
                    <div>
                    <HackathonFormat 
            HackathonName = "HacktheNorth"
            ProjectName = "AllerVision"
            linktodev = "https://devpost.com/software/allervision"
            linktogit = "https://github.com/SmilestheSad/HTNFrontEnd"
            hackathontext = "Created an app that uses Google's Vision API to scan foods and detect potential allergies. 
            Built using react native, ajax, python, flask and edamam api."
                />
                    </div>
                    <div>
                    <HackathonFormat 
            HackathonName = "JamHacks"
            ProjectName = "The Jam Expansion"
            linktodev = "https://devpost.com/software/thejamexpansion"
            linktogit = "https://github.com/SmilestheSad/TheJamExpansion"
            hackathontext = "Created a dungeon crawler game with multiple levels using python and pygame."
            />
                    </div>
                    <div>
                    <HackathonFormat 
            HackathonName = "WolfHacks"
            ProjectName = "Globlate"
            linktodev = "https://devpost.com/software/wolfhacks19"
            linktogit = "https://github.com/SmilestheSad/wolfhacks19"
            hackathontext = "Messaging app with built to allow people who speak different languages to communicate with each other. 
            Built using Google Translate API, Firebase, javascript, HTML and CSS."
                />
                    </div>
                </Swiper >
            </div >
        )
    }
}
export default ProjectSlider;