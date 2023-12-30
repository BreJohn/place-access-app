import { getAccessPlacesFromDB } from "../../services/firestore";
import { accessPlacesSlice } from "../access-places";

export const accessPlacesActions = accessPlacesSlice.actions;

export const fetchAccessPlaces = () => {
  return async (dispatch) => {
    const accessPlaces = await getAccessPlacesFromDB();
    dispatch(accessPlacesActions.getAccessPlaces(accessPlaces));
  };
};
