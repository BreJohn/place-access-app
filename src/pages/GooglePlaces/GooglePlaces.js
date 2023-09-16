import React from "react";
// @ts-ignore
import { GooglePlace } from "../../components/GooglePlace/GooglePlace.js";
import classes from "./GooglePlaces.module.scss";
import { useSelector } from "react-redux";

export const GooglePlaces = () => {
  const googlePlaces = useSelector((state) => state.googlePlaces.googlePlaces);
  return (
    <div className={classes["place-container"]}>
      {googlePlaces.length
        ? googlePlaces.map((item) => (
            <GooglePlace placeInfo={item} key={item.id}></GooglePlace>
          ))
        : []}
    </div>
  );
};
