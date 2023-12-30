import { configureStore } from "@reduxjs/toolkit";
import googlePlacesReducer from "./googleplaces";
import accessPlacesReducer from "./access-places";

import authReducer from "./auth";

const store = configureStore({
  reducer: {
    googlePlaces: googlePlacesReducer,
    auth: authReducer,
    accessPlaces: accessPlacesReducer,
  },
});

export default store;
