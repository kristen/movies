import React from 'react';
import './index.css';

export const StarRating: React.FC<{rating: number; size?: string}> = ({rating, size}) => {
    const percentage = `${(rating / 10) * 100}%`;
    if (rating === 0) {
        return (<div />)
    }
    return (
        <div className={`star-rating ${size}`}>
            <div className="fill-rating"
                 style={{width: percentage}}>
                ★★★★★
            </div>
            <div>★★★★★</div>
        </div>
    )
};

export default StarRating;
