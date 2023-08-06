import React, { useEffect } from "react";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { mapGooglePlacesToPlaces } from "./utils/utils";
import { key } from "./assets/googleApiKey";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import { useRef } from "react";
const loadGoogleMapsAPI = () => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap&libraries=places`;
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
};

function App() {
  const dispatch = useDispatch();

  const getNearbyPlaces = (lat, long) => {
    const athens = new window.google.maps.LatLng(lat, long);

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: athens,
      zoom: 15,
    });

    var request = {
      location: athens,
      radius: "500",
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (res) => {
      saveGooglePlacesToStore(mapGooglePlacesToPlaces(res));
    });
  };

  const saveGooglePlacesToStore = (places) => {
    dispatch({
      type: "SAVE_GOOGLE_PLACES",
      payload: places,
    });
  };

  const dataRef = useRef();

  useEffect(() => {
    const initMap = () => {
      const google = window.google;

      // Use the google object and perform the geocoding
      const geocoder = new google.maps.Geocoder();
      const address = "Athens";

      geocoder.geocode(
        {
          address: address,
        },
        (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            const latitude = results[0].geometry.location.lat();
            const longitude = results[0].geometry.location.lng();
            getNearbyPlaces(latitude, longitude);
          }
        }
      );
    };
    window.initMap = initMap;
    loadGoogleMapsAPI();

    // Cleanup function to remove the dynamically added script tag
    return () => {
      const script = document.querySelector(
        'script[src^="https://maps.googleapis.com/maps/api/js"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div id="map"></div>
    </Fragment>
  );
}

export default App;
