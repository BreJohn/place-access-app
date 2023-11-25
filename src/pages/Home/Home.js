import React from "react";
import classes from "./Home.module.scss";
import { getAccessPlaces } from "../../services/firestore";
import { GooglePlace } from "../../components/GooglePlace/GooglePlace";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessPlaces } from "../../store/accessPlaces";

export const Home = () => {
  const dispatch = useDispatch();
  // const placesContext = useContext(PlacesContext);

  const accessPlaces = useSelector((state) => {
    console.log(state);
    return state.accessPlaces.accessPlaces;
  });

  useEffect(() => {
    dispatch(fetchAccessPlaces());
  }, [dispatch]);

  console.log("HOME");
  return (
    <div className={classes["place-container"]}>
      {accessPlaces.length
        ? accessPlaces.map((item) => (
            <GooglePlace placeInfo={item} key={item.id}></GooglePlace>
          ))
        : []}
    </div>
  );
};
