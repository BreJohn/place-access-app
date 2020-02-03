import React from 'react';
import './Place.css'
import { Link} from 'react-router-dom';

export function Place(props) {
    const { placeInfo, photoUrl } = props;


    return (
        <div>
            <Link to={`/placeDetails/${placeInfo.place_id}`}>
                <div className="wrapper">
                    <div className="title"> {placeInfo.name} </div>
                    <img src={photoUrl} alt="placePhoto"/>
                    <div className="details">
                        <div className="location">
                            <strong>Address: </strong>{placeInfo.vicinity}
                        </div>
                        <div className="accessibility">
                            <strong>Accessibility: </strong>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>

                        </div>
                    </div>
                </div>
            </Link>
        </div>


    )
}