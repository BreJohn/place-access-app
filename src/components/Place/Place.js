import React from 'react';
import './Place.css'
import { hoverEffect } from '../../helpers/hoverEffect';

export function Place(props) {
    const { placeInfo } = props;

    return (
        <div className="wrapper" onMouseEnter={hoverEffect}
            onMouseLeave={hoverEffect}>
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