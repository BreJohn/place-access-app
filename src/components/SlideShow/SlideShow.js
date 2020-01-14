import React, { useState } from 'react';
import './SlideShow.css';
export function SlideShow(props) {
    const [slideIndex, setIndex] = useState(0);

    const  plusDivs = function(n) {
        console.log(slideIndex);
        if (n+slideIndex > 2) {
            setIndex(0);
        } else if (n+slideIndex < 0) {
            setIndex(3);
        }
        
        else {
            setIndex(slideIndex + 1);
        }
    }

    return (
        <div className="w3-content w3-display-container">

            <div className={`w3-display-container mySlides ${slideIndex === 0 ? 'displayBlock' : 'displayNone'}`}>
                <img src={require(`../../assets/img_lights.jpg`)} className="slideShowImg" alt="img_lights" />
                <div className=" w3-padding-16 w3-black">
                    Lunar Aurora
                </div>
            </div>

            <div className={`w3-display-container mySlides ${slideIndex === 1 ? 'displayBlock' : 'displayNone'}`}>
            <img src={require(`../../assets/img_snowtops.jpg`)} className="slideShowImg" alt="img_snowtops" />
                <div className="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black">
                    Northern Lights
                </div>
            </div>

            <div className={`w3-display-container mySlides ${slideIndex === 2 ? 'displayBlock' : 'displayNone'}`}>
                <img src={require(`../../assets/img_mountains.jpg`)} className="slideShowImg" alt="img_mountains" />
                <div className="w3-display-topleft w3-large w3-container w3-padding-16 w3-black">
                    Beautiful Mountains
                </div>
            </div>

            <div className={`w3-display-container mySlides ${slideIndex === 3 ? 'displayBlock' : 'displayNone'}`}>
                <img src={require(`../../assets/img_forest.jpg`)} className="slideShowImg" alt="img_forest" />
                <div className="w3-display-topright w3-large w3-container w3-padding-16 w3-black">
                    The Rain Forest
            </div>
            </div>

            <button className="w3-button w3-display-left w3-black" onClick={plusDivs.bind(this, -1)}>&#10094;</button>
            <button className="w3-button w3-display-right w3-black" onClick={plusDivs.bind(this, 1)}>&#10095;</button>

        </div >
    )
}