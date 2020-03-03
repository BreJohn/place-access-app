import React from 'react';
import './Place.css'
import { Link} from 'react-router-dom';
import { Rating } from '../UI/Rating/Rating';
import PropTypes from "prop-types";

export function Place(props) {
    const { placeInfo, photoUrl } = props;
    console.log('Place: ' + placeInfo.place_id, photoUrl)
    return (
        <div>
            <Link to={{
                pathname:`/placeDetails/${placeInfo.place_id}`,
                state: {
                    reference: photoUrl
                }
            }}>
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

Place.propTypes = {
    placeInfo: PropTypes.object,
    photoUrl: PropTypes.string
};