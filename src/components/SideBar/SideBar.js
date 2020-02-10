import React from 'react';
import './SideBar.css';
import { SlideShow } from '../SlideShow/SlideShow';
import { getSpecificPlace } from '../../helpers/helpers';

export function SideBar(props) {
    const result = getSpecificPlace(props.id);
    console.log(result);
    return (
        <div className="sideWrapper">
            <SlideShow></SlideShow>
            <div className="details m-t-15">
            {result.data.result.name}
            </div>
            <div className="detailsLabel">
            ADDRESS
            </div>
            <div className="details">
                {result.data.result.formatted_address}
            </div>
            <div className="detailsLabel">
                PHONE
            </div>
            <div className="details">
            {result.data.result.formatted_phone_number}
            </div>
            <div className="detailsLabel">
                RATING
            </div>
            <div className="details">
            {result.data.result.rating}
            </div>
        </div>
    )
}