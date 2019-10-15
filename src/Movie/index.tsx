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

const Movie: React.FC<MovieSummary> = ({poster_path, title, overview, release_date}) => {
    const releaseYear = (release_date.match(/^(\d{4})-\d{2}-\d{2}$/) || [, ""])[1];
    return (
        <div>
            <div className="movie-summary">
                {poster_path ?
                    <img className="poster" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt=""/> :
                    <div className="poster skeleton-poster"/>}
                <div className="right">
                    {title.length ?
                        <div className="title">{title} <span className="release-year">({releaseYear})</span></div> :
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