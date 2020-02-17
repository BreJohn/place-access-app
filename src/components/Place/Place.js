import React from 'react';
import './Place.css'
import { Link} from 'react-router-dom';
import { Rating } from '../UI/Rating/Rating';

export function Place(props) {
    const { placeInfo, photoUrl } = props;
    return (
        <div>
            <Link to={`/placeDetails/${placeInfo.place_id}`}>
                <div className="wrapper">
                    <div className="title"> {placeInfo.name} </div>
                    <img className="placeImg" src={photoUrl} alt="placePhoto"/> 
                    <div className="p-l-10">
                        <div className="location">
                            <strong>Address: </strong>{placeInfo.vicinity}
                        </div>
                        <div className="accessibility">
                            <strong>Accessibility: </strong>
                            <Rating rating={placeInfo.rating}/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>


    )
}