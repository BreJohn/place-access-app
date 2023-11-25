import { createSlice } from "@reduxjs/toolkit";

const initialGooglePlacesState = { googlePlaces: [] };

const googlePlacesSlice = createSlice({
  name: "googlePlaces",
  initialState: initialGooglePlacesState,
  reducers: {
    saveGooglePlaces(state, action) {
      state.googlePlaces = [...state.googlePlaces, ...action.payload];
      // saveGooglePlacesToDB(state.googlePlaces);
    },
    update() {},
    delete() {},
  },
});
export const googlePlacesActions = googlePlacesSlice.actions;
export default googlePlacesSlice.reducer;
