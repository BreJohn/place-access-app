import { getAccessPlacesFromDB } from "../../services/firestore";
import { accessPlacesSlice } from "../access-places";

export const accessPlacesActions = accessPlacesSlice.actions;

export const fetchAccessPlaces = () => {
  return async (dispatch) => {
    dispatch(accessPlacesActions.isLoading(true));
    const accessPlaces = await getAccessPlacesFromDB();
    dispatch(accessPlacesActions.getAccessPlaces(accessPlaces));
    dispatch(accessPlacesActions.isLoading(false));
  };
};
