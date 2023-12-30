import React from "react";
import classes from "./Home.module.scss";
import { Place } from "../../components/Place/Place";
import { useSelector } from "react-redux";
export const Home = () => {
  // const placesContext = useContext(PlacesContext);

  const accessPlaces = useSelector((state) => {
    console.log(state);
    return state.accessPlaces.accessPlaces;
  });

  console.log("HOME");
  return (
    <div className="place-container">
      {accessPlaces.length
        ? accessPlaces.map((item) => (
            <Place placeInfo={item} key={item.id}></Place>
          ))
        : []}
    </div>
  );
};
