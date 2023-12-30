import React from "react";
// @ts-ignore
import { Place } from "../../components/Place/Place.js";
import classes from "./Places.module.scss";
import { useSelector } from "react-redux";

export const Places = () => {
  const googlePlaces = useSelector((state) => state.googlePlaces.googlePlaces);
  return (
    <div className="place-container">
      {googlePlaces.length
        ? googlePlaces.map((item) => (
            <Place placeInfo={item} key={item.id}></Place>
          ))
        : []}
    </div>
  );
};
