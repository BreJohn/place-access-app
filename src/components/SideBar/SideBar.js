import React from 'react';
import './SideBar.css';
import { SlideShow } from '../SlideShow/SlideShow';

export function SideBar(props) {
    return (
        <div className="sideWrapper">
            <SlideShow></SlideShow>
            Request ID: {props.id}
        </div>
    )
}