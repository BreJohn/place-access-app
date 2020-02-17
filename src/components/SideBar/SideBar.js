import React from 'react';
import './SideBar.css';
import { getSpecificPlace, getPhoto } from '../../helpers/httpHelpers';
import { Rating } from '../UI/Rating/Rating';

export function SideBar(props) {
    const result = getSpecificPlace(props.id);
    const photoUrl = getPhoto(props.id);

    return (
        <div className="sideWrapper">
            <img className="placeImg" src={photoUrl} alt="placePhoto" />

            <div className="details m-t-15">
                {result.data && result.data.result? result.data.result.name : ''}
            </div>
            <div className="detailsLabel">
                ADDRESS
            </div>
            <div className="details">
                {result.data && result.data.result? result.data.result.formatted_address : ''}
            </div>
            <div className="detailsLabel">
                PHONE
            </div>
            <div className="details">
                {result.data && result.data.result? result.data.result.formatted_phone_number : ''}
            </div>
            <div className="detailsLabel">
                RATING
            </div>
            <div className="details">
                <Rating rating={result.data && result.data.result? result.data.result.rating : ''} />

            </div>
        </div>
    )
}