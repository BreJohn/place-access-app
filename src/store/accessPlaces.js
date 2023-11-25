import { createSlice } from "@reduxjs/toolkit";
import { getAccessPlaces } from "../services/firestore";

const initialAccessPlacesState = { accessPlaces: [] };

const accessPlacesSlice = createSlice({
  name: "accessPlaces",
  initialState: initialAccessPlacesState,
  reducers: {
    getAccessPlaces(state, action) {
      state.accessPlaces = [...action.payload];
    },
    update() {},
    delete() {},
  },
});

export const accessPlacesActions = accessPlacesSlice.actions;

export const fetchAccessPlaces = () => {
  return async (dispatch) => {
    const accessPlaces = await getAccessPlaces();
    dispatch(accessPlacesActions.getAccessPlaces(accessPlaces));
  };
};

export default accessPlacesSlice.reducer;
