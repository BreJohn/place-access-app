import React from "react";
import { useParams } from "react-router-dom";
import "./PlaceDetails.css";
import styled from "styled-components";
import entranceImg from "../../assets/entrance.jpg";

const PlaceDetails = (props) => {
  const PlaceDetailsWrapper = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    margin: 0px 16px;
    > div {
      width: 30vw;
      background-color: white;
      margin: 16px;
      text-align: center;
      padding: 8px 4px 0px 4px;
    }
    .title {
    }
    img {
      width: 100%;
    }
  `;
  const { id } = useParams();
  return (
    <PlaceDetailsWrapper>
      <div>
        <div className="title">Entrance</div>
        <img src={entranceImg}></img>
      </div>
      <div>
        <div className="title">Main Area</div>
      </div>
      <div>
        <div className="title">WC</div>
      </div>
    </PlaceDetailsWrapper>
  );
};

export default PlaceDetails;
