import React from "react";
import { useParams } from "react-router-dom";
import "./PlaceDetails.css";
import styled from "styled-components";
import entranceImg from "../../assets/entrance.jpg";
import mainAreaImg from "../../assets/main-area.jpg";
import wcImg from "../../assets/wc.jpg";
import { useState } from "react";

const PlaceDetails = (props) => {
  const PlaceDetailsWrapper = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin: 0px 16px;
    flex-wrap: wrap;
    > div {
      min-width: 400px;
      width: 30vw;
      background-color: white;
      margin: 16px;
      text-align: center;
      padding: 8px 4px 0px 4px;
      height: 500px;
      &:hover {
        background-color: hsl(0deg 0% 90%) !important;
      }
    }
    &.title {
      height: 25px;
    }
    img {
      height: calc(100% - 29px);
      width: 100%;
    }
  `;
  const { id } = useParams();
  return (
    <div className="text-center">
      <h1> PLACE ID {id}</h1>
      <PlaceDetailsWrapper>
        <div className="entrance">
          <div className="title">Entrance</div>
          <img src={entranceImg} alt="Entrance"></img>
        </div>
        <div className="main-area">
          <div className="title">Main Area</div>
          <img src={mainAreaImg} alt="Main Area"></img>
        </div>
        <div className="wc">
          <div className="title">WC</div>
          <img src={wcImg} alt="WC"></img>
        </div>
      </PlaceDetailsWrapper>
    </div>
  );
};

export default PlaceDetails;
