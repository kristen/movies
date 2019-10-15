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

const Movie: React.FC<MovieSummary> = ({poster_path, title, overview}) => {
    return (
        <div>
            <div className="movie-summary">
                <div className="left">
                    {poster_path ?
                        <img className="poster" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt=""/> :
                        <div className="poster skeleton-poster"/>}
                </div>
                <div className="right">
                    {title.length ?
                        <div className="title">{title}</div> :
                        <div className="title skeleton-title"/>}
                    {overview.length ?
                        <div className="overview">{overview}</div> :
                        <div className="overview skeleton-overview" />}
                </div>



            </div>

        </div>
    )
};

export default Movie;
