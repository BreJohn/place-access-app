import { configureStore } from "@reduxjs/toolkit";
import googlePlacesReducer from "./googleplaces";
import authReducer from "./auth";

const store = configureStore({
  reducer: { googlePlaces: googlePlacesReducer, auth: authReducer },
});

export default store;
