import { createStore } from "redux";

const placesReducer = (state = { googlePlaces: [] }, action) => {
  if (action.type === "SAVE_GOOGLE_PLACES") {
    return { googlePlaces: [...state.googlePlaces, ...action.payload] };
  }
  return state;
};

const store = createStore(placesReducer);

export default store;
