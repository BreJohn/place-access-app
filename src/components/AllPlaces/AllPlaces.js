import React from 'react';
import { Place } from '../Place/Place';
import { getPhoto } from '../../helpers/httpHelpers';
import './AllPlaces.css';
import withLocalStorage from '../../hoc/withLocalStorage';

 const AllPlaces = (props) => {
    console.log(props);
    return (
        <div className="p-l-5">
            {
                props.results? props.results.map(
                    item => <Place placeInfo={item} key={item.place_id} photoUrl={getPhoto(item.photos? item.photos[0].photo_reference : '')}></Place>
                ): []
            }
        </div>
    )
}

export default withLocalStorage(AllPlaces);