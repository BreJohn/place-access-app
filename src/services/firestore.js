import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import { firestore } from "../firebase_setup/index";

const saveGooglePlacesToDB = (places) => {
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

export default saveGooglePlacesToDB;
