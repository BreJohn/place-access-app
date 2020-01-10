import React from 'react';
import { useParams } from 'react-router-dom';


export function PlaceDetails(props) {
    const { id } = useParams();
    return (
        <div>
            <h3>Requested Place ID: {id}</h3>
        </div>
    )
}