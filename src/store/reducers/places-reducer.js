const placesReducer = (state = { googlePlaces: [] }, action) => {
  if (action.type === "SAVE_GOOGLE_PLACES") {
    return { googlePlaces: [...state.googlePlaces, ...action.payload] };
  }
  return state;
};

export default placesReducer;
