import React from "react";
import { Switch, Route } from "react-router-dom";
import { AllPlaces } from "../AllPlaces/AllPlaces";
import { MyPlaces } from "../MyPlaces/MyPlaces";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";
import { PlaceAdd } from "../PlaceAdd/PlaceAdd";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={AllPlaces} />
      <Route path="/allPlaces" component={AllPlaces} />
      <Route path="/myPlaces" component={MyPlaces} />
      <Route path="/placeAdd" component={PlaceAdd} />

      <Route path="/place-details/:id" component={PlaceDetails} />
      <Redirect from="/" to="/allPlaces" />
    </Switch>
  );
};

export default Routes;
