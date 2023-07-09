import React from "react";
// @ts-ignore
import places from "../../assets/Places.json";
import { Place } from "../Place/Place.js";
import classes from "./AllPlaces.module.scss";

export const AllPlaces = () => {
  const placeArray = places;
  return (
    <div className={classes["place-container"]}>
      {placeArray.map((item) => (
        <Place placeInfo={item} key={item.index}></Place>
      ))}
    </div>
  );
};
