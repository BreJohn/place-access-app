import React, { useEffect, useState } from 'react';
import { Place } from '../Place/Place';
import { getPlaces, getPhoto } from '../../helpers/httpHelpers';

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
