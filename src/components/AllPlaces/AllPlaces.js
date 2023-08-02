import React from "react";
// @ts-ignore
import { Place } from "../Place/Place.js";
import classes from "./AllPlaces.module.scss";
import { useContext } from "react";
import PlacesContext from "../../store/places-context";

export const AllPlaces = () => {
  const placesContext = useContext(PlacesContext);
  return (
    <div className={classes["place-container"]}>
      {placesContext.places.map((item) => (
        <Place placeInfo={item} key={item.id}></Place>
      ))}
    </div>
  );
};
