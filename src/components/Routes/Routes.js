import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { PlaceAdd } from "../../pages/PlaceAdd/PlaceAdd";
import { GooglePlaceDetails } from "../../pages/GooglePlaceDetails/GooglePlaceDetails";
import { Login } from "../../pages/Auth/Login/Login";
import { Entrance } from "../../pages/GooglePlaceDetails/Entrance/Entrance";
import { WC } from "../../pages/GooglePlaceDetails/WC/WC";
import { MainArea } from "../../pages/GooglePlaceDetails/MainArea/MainArea";
import { Places } from "../../pages/Places/Places";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />

      <Route exact path="/googlePlaces" component={Places} />
      <Route path="/placeAdd" component={PlaceAdd} />

      <Route path="/googlePlaces/:id/entrance" component={Entrance} />
      <Route path="/googlePlaces/:id/main-area" component={MainArea} />
      <Route path="/googlePlaces/:id/wc" component={WC} />
      <Route path="/googlePlaces/:id" component={GooglePlaceDetails} />

      <Route path="/places/:id/entrance" component={Entrance} />
      <Route path="/places/:id/main-area" component={MainArea} />
      <Route path="/places/:id/wc" component={WC} />
      <Route path="/places/:id" component={GooglePlaceDetails} />

      <Route path="/login" component={Login} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default Routes;
