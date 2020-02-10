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
            </div>

            <div className={`w3-display-container mySlides ${slideIndex === 1 ? 'displayBlock' : 'displayNone'}`}>
            <img src={require(`../../assets/img_snowtops.jpg`)} className="slideShowImg" alt="img_snowtops" />
            </div>

            <div className={`w3-display-container mySlides ${slideIndex === 2 ? 'displayBlock' : 'displayNone'}`}>
                <img src={require(`../../assets/img_mountains.jpg`)} className="slideShowImg" alt="img_mountains" />
            </div>

            <div className={`w3-display-container mySlides ${slideIndex === 3 ? 'displayBlock' : 'displayNone'}`}>
                <img src={require(`../../assets/img_forest.jpg`)} className="slideShowImg" alt="img_forest" />
            </div>

            <button className="w3-button w3-display-left w3-black" onClick={plusDivs.bind(this, -1)}>&#10094;</button>
            <button className="w3-button w3-display-right w3-black" onClick={plusDivs.bind(this, 1)}>&#10095;</button>

        </div >
    )
}