import React, { useState, useEffect } from 'react';
import { getPlaces } from '../helpers/httpHelpers';

const withLocalStorage = (Component) => {
    return props => {
        const [results, setResults] = useState([]);
        useEffect(() => {
            const places = getPlaces()
            setResults(places);
        }, []);
        return <Component results={results}/>
    }
}


export default withLocalStorage;