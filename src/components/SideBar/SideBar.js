import React from 'react';
import './SideBar.css';
import { getSpecificPlace, getPhoto } from '../../helpers/httpHelpers';
import { Rating } from '../UI/Rating/Rating';

export function SideBar(props) {
    const result = getSpecificPlace(props.id);
    console.log('Side Bar: ', getPhoto(props.id + ' url: ' + props.photoUrl) )
    return (
        <div className="sideWrapper">
            
            <div className="details detailsLabel m-t-15">
                {result && result.data && result.data.result? result.data.result.name : ''}
            </div>

            <img className="sideBarImg" src={props.photoUrl} alt="placePhoto" />

            <div className="detailsLabel">
                ADDRESS
            </div>
            <div className="details">
                {result && result.data && result.data.result? result.data.result.formatted_address : ''}
            </div>
            <div className="detailsLabel">
                PHONE
            </div>
            <div className="details">
                {result && result.data && result.data.result? result.data.result.formatted_phone_number : ''}
            </div>
            <div className="detailsLabel">
                RATING
            </div>
            <div className="details">
                <Rating rating={result && result.data && result.data.result? result.data.result.rating : ''} />

            </div>
        </div>
    )
}