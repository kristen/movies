import React from 'react';
import './index.css';

export const StarRating: React.FC<{rating: number}> = ({rating}) => {
    const percentage = `${(rating / 10) * 100}%`;
    return (
        <div className="star-rating">
            <div className="fill-rating"
                 style={{width: percentage}}>
                ★★★★★
            </div>
            <div>★★★★★</div>
        </div>
    )
};

export default StarRating;
