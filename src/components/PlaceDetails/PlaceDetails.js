import React from 'react';
import { useParams } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';
import './PlaceDetails.css';

export function PlaceDetails(props) {
    const { id } = useParams();

    return (
        <>
            <SideBar id={id} photoUrl={props.location.state.reference}></SideBar>
            <div className="line">
            <div className="placeDetails">
                <div className="detailsLabel">
                    ΓΕΝΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ
                </div>
                <div className="generalInfo">
                    <span className="stairs">Όροφοι: </span>1
                </div>
                <div className="generalInfo">
                    <span className="stairs">Πλήθος Σκαλιών:</span>10
                </div> 
                <div className="generalInfo">
                    <span className="stairs">Ασανσέρ: </span> Ναι
                </div>  

            </div>
        <div className="placeDetails">
            <div className="detailsLabel">
                ΕΙΣΟΔΟΣ / ΕΞΟΔΟΣ
                </div>
            <div>
                <span className="stairs">Σκαλιά: </span>Ναι
                    <span className="stairs">Πλήθος: </span>10
                    <span className="stairs">Μέγεθος: </span> Μεσαία
                </div>
            <div className="entrancePhoto">
                <img src={require('../../assets/stairs.jpg')} alt="entrance" />
            </div>
        </div>
        </div>
        <div className="line">
            <div className="placeDetails">
                <div className="detailsLabel">
                    ΠΡΟΣΒΑΣΙΜΟΤΗΤΑ
                </div>
                <div className="generalInfo">
                    <span className="stairs">Όροφοι: </span>1
                </div>
                <div className="generalInfo">
                    <span className="stairs">Πλήθος Σκαλιών:</span>10
                </div> 
                <div className="generalInfo">
                    <span className="stairs">Ασανσέρ: </span> Ναι
                </div>  

            </div>
        <div className="placeDetails">
            <div className="detailsLabel">
                W/C
                </div>
            <div>
                <span className="stairs">Σκαλιά: </span>Ναι
                    <span className="stairs">Πλήθος: </span>10
                    <span className="stairs">Μέγεθος: </span> Μεσαία
                </div>
        </div>
        </div>

        </>
    )
}