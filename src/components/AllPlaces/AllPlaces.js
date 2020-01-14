import React, { useEffect, useState } from 'react';
// @ts-ignore
// import places from '../../assets/Places.json';
// import { Place } from '../Place/Place.js';
import axios from 'axios';
import { Place } from '../Place/Place';

export function AllPlaces() {
    const key = 'AIzaSyDXrny7l7-uRKd64MWqBGh4_-ke_j2l3qk';
    const request = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0008826,23.6754807&radius=2000&keyword=bar&key=${key}`;
    const [results, setResults] = useState([]);

    useEffect( () => {
        axios.get(request).then(
            (response) => {
                setResults(response.data.results);
            }
        )
    })
    return (
        <div>
            {
                results.map(
                    item => <Place placeInfo={item} key={item.place_id}></Place>
                )
            }
        </div>
    )
}

// export function AllPlaces() {
//     const placeArray = places;
//     return (
//         <div>
//             {
//                 placeArray.map(
//                     item => <Place placeInfo={item} key={item.index}></Place>
//                 )
//             }
//         </div>
//     )