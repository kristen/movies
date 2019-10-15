import React from 'react';
import "./index.css";

export interface MovieSummary {
    poster_path: string|null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: string[];
    id: number;
    original_title: string;
    title: string;
    backdrop_path: string|null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

const Movie: React.FC<MovieSummary> = ({title, poster_path}) => {
    return (
        <div className="movie">
            {title.length ?
                <div className="title">{title}</div> :
                <div className="title empty-title"/>}
            {poster_path ?
                <img className="poster" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt=""/> :
                <div className="poster empty-poster"/>}


        </div>
    )
};

export default Movie;
