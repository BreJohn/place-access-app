import React from "react";
import classes from "./Place.module.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function Place(props) {
  const { placeInfo } = props;

  return (
    <Link to={`/place-details/${placeInfo.id}`}>
      <div className={classes["place-wrapper"]}>
        <div className="title mt-6"> {placeInfo.name} </div>
        <img
          className={classes.placeImg}
          src={placeInfo.photo}
          alt="placeImg"
        />
        <div className="details">
          <div className="location">
            <strong>Address: </strong>
            {placeInfo.address}
          </div>
          <div className="accessibility">
            <strong>Accessibility: </strong>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="stairs">
            <strong>Total stairs: </strong>
            15
          </div>
          <div className="wc">
            <strong>WC Accessible: </strong>
            No
          </div>
        </div>
      </div>
    </Link>
  );
}
