export const mapGooglePlacesToPlaces = (googlePlaces) => {
  return googlePlaces.map((place) => ({
    id: place.place_id,
    name: place.name,
    photo: place.photos ? place.photos[0].getUrl() : null,
    rating: place.rating ?? "",
    address: place.vicinity,
  }));
};
