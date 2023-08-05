import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { GooglePlaces } from "../../pages/GooglePlaces/GooglePlaces";
import { PlaceAdd } from "../../pages/PlaceAdd/PlaceAdd";
import { GooglePlaceDetails } from "../../pages/GooglePlaceDetails/GooglePlaceDetails";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />

      <Route exact path="/googlePlaces" component={GooglePlaces} />
      <Route path="/placeAdd" component={PlaceAdd} />

      <Route path="/googlePlaces/:id" component={GooglePlaceDetails} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default Routes;
