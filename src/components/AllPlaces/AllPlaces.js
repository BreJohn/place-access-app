import React from 'react';
// @ts-ignore
import places from '../../assets/Places.json';
import { Place } from '../Place/Place.js';
import './AllPlaces.css';

export function AllPlaces() {
    const placeArray = places;
    return (
        <div className='flex'>
            {
                placeArray.map(
                    item => <Place placeInfo={item} key={item.index}></Place>
                )
            }
        </div>
    )
}