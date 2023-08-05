import { createStore } from "redux";
import placesReducer from "./reducers/places-reducer";

const store = createStore(placesReducer);

export default store;
