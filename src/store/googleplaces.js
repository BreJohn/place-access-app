import { createSlice } from "@reduxjs/toolkit";
import saveGooglePlacesToDB from "../services/firestore";
import { firestore } from "../firebase_setup";

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
