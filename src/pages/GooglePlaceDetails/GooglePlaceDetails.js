import React from "react";
import { useParams } from "react-router-dom";
import classes from "./GooglePlaceDetails.module.scss";
import entranceImg from "../../assets/entrance.jpg";
import mainAreaImg from "../../assets/main-area.jpg";
import wcImg from "../../assets/wc.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const GooglePlaceDetails = (props) => {
  const { id } = useParams();

  return (
    <div className="text-center">
      <h1> PLACE ID {id}</h1>
      <div className={classes["place-details-wrapper"]}>
        <div className="entrance">
          <Link to={`${id}/entrance`}>
            <div className="title">Entrance</div>
            <img src={entranceImg} alt="Entrance"></img>
          </Link>
        </div>
        <div className="main-area">
          <Link to={`${id}/main-area`}>
            <div className="title">Main Area</div>
            <img src={mainAreaImg} alt="Main Area"></img>
          </Link>
        </div>
        <div className="wc">
          <Link to={`${id}/wc`}>
            <div className="title">WC</div>
            <img src={wcImg} alt="WC"></img>
          </Link>
        </div>
      </div>
    </div>
  );
};
