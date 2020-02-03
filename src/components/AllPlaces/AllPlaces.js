import React, { useEffect, useState } from 'react';
// @ts-ignore
// import places from '../../assets/Places.json';
// import { Place } from '../Place/Place.js';
import { Place } from '../Place/Place';
import { getPlaces, getPhoto } from '../../helpers/helpers';

export function AllPlaces() {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const places = getPlaces()
        setResults(places);
    }, [])
    return (
        <div>
            {
                results.map(
                    item => <Place placeInfo={item} key={item.place_id} photoUrl={getPhoto(item.photos? item.photos[0].photo_reference : '')}></Place>
                )
            }
        </div>
    )
}
