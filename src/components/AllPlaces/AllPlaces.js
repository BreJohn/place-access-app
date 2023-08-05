import React from "react";
// @ts-ignore
import { Place } from "../Place/Place.js";
import classes from "./AllPlaces.module.scss";
import { useContext } from "react";
import PlacesContext from "../../store/places-context";
import { useSelector } from "react-redux";

export const AllPlaces = () => {
  const googlePlaces = useSelector((state) => state.googlePlaces);

  // const placesContext = useContext(PlacesContext);
  return (
    <div className={classes["place-container"]}>
      {googlePlaces.length
        ? googlePlaces.map((item) => (
            <Place placeInfo={item} key={item.id}></Place>
          ))
        : []}
    </div>
  );
};
