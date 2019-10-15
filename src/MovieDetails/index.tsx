import React from 'react';
import {useParams} from "react-router";

const MovieDetails: React.FC = () => {
    const {movieId} = useParams();
    return (
        <div>
            Movie Details {movieId}
        </div>
    )
};

export default MovieDetails;
