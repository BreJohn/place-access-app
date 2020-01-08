import React from 'react';
import places from '../../assets/Places.json';
import { Place } from '../Place/Place.js';

export function AllPlaces() {
    const placeArray = places;
    return (
        <div>
            {
                placeArray.map(
                    item => <Place placeInfo={item} key={item.index}></Place>
                )
            }
        </div>
    )
}