import React from 'react';
import { useParams } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';


export function PlaceDetails(props) {
    const { id } = useParams();
    
    return (
        <>
        <SideBar id={id} photoUrl={props.location.state.reference}></SideBar>
        </>
    )
}