import React from "react";
import places from "../assets/Places.json";

const placeArray = places;

const PlacesContext = React.createContext({
  places: [],
});

export default PlacesContext;
