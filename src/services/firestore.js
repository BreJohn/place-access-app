import { collection, doc, setDoc, query, getDocs } from "@firebase/firestore";
import { firestore, storage } from "../firebase_setup/index";
import { ref, getDownloadURL, uploadBytes, getStorage } from "firebase/storage";

export const saveGooglePlacesToDB = (places) => {
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

export const saveGooglePlaceToDB = (place, image, placeArea) => {
  try {
    setDoc(doc(firestore, "places", place.id), {
      ...place,
    });
    if (image) saveImageToDB(image, place.id, placeArea);
  } catch (err) {
    console.log(err);
  }
};

const saveImageToDB = (image, placeId, placeArea) => {
  try {
    const imageRef = ref(storage, `images/${placeArea}/${placeId}`);
    uploadBytes(imageRef, image.file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const downloadImageFromDB = async (placeId, placeArea) => {
  const storage = getStorage();

  return new Promise((resolve, reject) => {
    getDownloadURL(ref(storage, `images/${placeArea}/${placeId}`))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        resolve(url);
      })
      .catch((error) => {
        // Handle any errors
        reject(error);
      });
  });
};

export const getAccessPlacesFromDB = async () => {
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
