import axios from 'axios';

export const getPlaces = () => {
    const key = getKey();
    const request = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0008826,23.6754807&radius=2000&keyword=bar&key=${key}`;
    const resultsFromStorage = localStorage.getItem('results');
    if (resultsFromStorage) {
        const parsedResults = JSON.parse(resultsFromStorage);
        return parsedResults;
    } else {
        axios.get(request).then(
            (response) => {
                localStorage.setItem('results', JSON.stringify(response.data.results));
                return response.data.results;
            }
        )
    }
}

export const getPhoto = (reference) => {
    const key = getKey();
    const request = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photoreference=${reference}&key=${key}`
        // axios.get(request, {
        //     headers: { 'responseType': 'image/png' }

    // }).then(
    //     (response) => {
    //         if (!response) return '';
    //         const u8 = new Uint8Array(response.data);
    //         const b64encoded = btoa(String.fromCharCode.apply(null, u8));
    //         const mimetype = "image/png";
    //         const imgSrc = "data:" + mimetype + ";base64," + b64encoded;
    //         localStorage.setItem(reference, JSON.stringify(imgSrc));
    return request;
    //     }
    // )
}

const getKey = () => {
    const key = 'AIzaSyDXrny7l7-uRKd64MWqBGh4_-ke_j2l3qk';
    return key;
}