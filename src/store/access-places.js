import { createSlice } from "@reduxjs/toolkit";

const initialAccessPlacesState = { accessPlaces: [], loading: false };

export const accessPlacesSlice = createSlice({
  name: "accessPlaces",
  initialState: initialAccessPlacesState,
  reducers: {
    getAccessPlaces(state, action) {
      state.accessPlaces = [...action.payload];
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    update() {},
    delete() {},
  },
});

export default accessPlacesSlice.reducer;
