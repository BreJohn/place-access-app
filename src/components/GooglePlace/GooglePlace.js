import React from "react";
import classes from "./GooglePlace.module.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function GooglePlace(props) {
  const { placeInfo } = props;

  return (
    <Link to={`/googlePlaces/${placeInfo.id}`}>
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
            <strong>Rating: </strong>
            {Array(5)
              .fill("")
              .map((_, index) => {
                return (
                  <span
                    key={index}
                    className={`fa fa-star ${
                      placeInfo.rating > index + 1 ? classes.checked : ""
                    }`}
                  ></span>
                );
              })}
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
