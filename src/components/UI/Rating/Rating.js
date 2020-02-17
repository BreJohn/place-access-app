import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Rating(props) {
    const rating = props.rating? props.rating : 0;
    const roundedRating = Math.round(rating);
    const filledStars = Array(roundedRating).fill('#ffcc00');
    const emptyStars = Array(5 - roundedRating).fill('#000000');
    return (
        <>
            {filledStars.map(
                (value, key) => <FontAwesomeIcon key={key} icon="star" color={value} size="1x" />
            )}
            {emptyStars.map(
                (value, key) => <FontAwesomeIcon key={key} icon="star" color={value} />
            )}
        </>
    )
}