import React from "react";
import { useParams } from "react-router-dom";
import "./PlaceDetails.css";
import styled from "styled-components";
import entranceImg from "../../assets/entrance.jpg";
import mainAreaImg from "../../assets/main-area.jpg";
import wcImg from "../../assets/wc.jpg";

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
        <div>
          <div className="title">Entrance</div>
          <img src={entranceImg}></img>
        </div>
        <div>
          <div className="title">Main Area</div>
          <img src={mainAreaImg}></img>
        </div>
        <div>
          <div className="title">WC</div>
          <img src={wcImg}></img>
        </div>
      </PlaceDetailsWrapper>
    </div>
  );
};

export default PlaceDetails;
