import React from 'react';
import './Place.css'

export function Place(props) {
    const { placeInfo } = props;
    let hovered = false;
    const handleClick = function (e) {
        console.log(e.currentTarget.className);
        if (!hovered && e.currentTarget.className.indexOf('wrapper') > -1) {
            e.currentTarget.classList.add('hovered-state')
        } else {
            e.currentTarget.classList.remove('hovered-state')
        }
        hovered = !hovered;
    }
    return (
        <div className="wrapper" onMouseEnter={handleClick}
            onMouseLeave={handleClick}>
            <div className="title"> {placeInfo.name} </div>
            <img className="placeImg" src={placeInfo.photo} alt="placeImg" />
            <div className="details">
                <div className="location">
                    <strong>Address: </strong>{placeInfo.address}
                </div>
                <div className="accessibility">
                    <strong>Accessibility: </strong>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>

                </div>
            </div>
        </div>
    )
}