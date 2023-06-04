import React, { useState } from "react";
import "./Place.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function Place(props) {
  const [isHovered, setIsHovered] = useState();
  const { placeInfo } = props;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/place-details/${placeInfo.index}`}>
      <div
        className={`place-wrapper ${isHovered ? "hovered-state" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="title"> {placeInfo.name} </div>
        <img className="placeImg" src={placeInfo.photo} alt="placeImg" />
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
