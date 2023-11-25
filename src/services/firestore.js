import {
  addDoc,
  collection,
  doc,
  setDoc,
  query,
  getDocs,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/index";

export const saveGooglePlacesToDB = (places) => {
  const ref = collection(firestore, "google_places"); // Firebase creates this automatically

  let data = {
    google_places: places,
  };

  try {
    places.forEach((place) => {
      setDoc(doc(firestore, "google_places", place.id), {
        id: place.id ? place.id : "",
        name: place.name ? place.name : "",
        rating: place.rating ? place.rating : "",
        photo: place.photo ? place.photo : "",
        address: place.address ? place.address : "",
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const saveGooglePlaceToDB = (place) => {
  const ref = collection(firestore, "places"); // Firebase creates this automatically

  try {
    setDoc(doc(firestore, "places", place.id), {
      ...place,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAccessPlaces = async () => {
  const q = query(collection(firestore, "places"));

  const querySnapshot = await getDocs(q);
  let accessPlaces = [];
  querySnapshot.forEach((doc) => {
    accessPlaces.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return accessPlaces;
};
