import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Entrance.module.scss";

export const Entrance = (props) => {
  const { id } = useParams();
  const places = useSelector((state) => state.googlePlaces.googlePlaces);
  console.log("Entrance", places);
  return <div className="text-center"></div>;
};
