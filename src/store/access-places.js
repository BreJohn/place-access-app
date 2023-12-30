import { createSlice } from "@reduxjs/toolkit";

const initialAccessPlacesState = { accessPlaces: [] };

export const accessPlacesSlice = createSlice({
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

export default accessPlacesSlice.reducer;
