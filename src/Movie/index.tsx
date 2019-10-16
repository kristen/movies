import React from 'react';
import "./index.css";
import StarRating from "../StarRating";
import {Link} from "react-router-dom";

export interface MovieSummary {
    poster_path: string|null;
    overview: string;
    release_date: string;
    id: number;
    title: string;
    vote_average: number;
}

const Movie: React.FC<MovieSummary> = ({id, poster_path, title, overview, release_date, vote_average}) => {
    const releaseYear = (release_date.match(/^(\d{4})-\d{2}-\d{2}$/) || ["", ""])[1];
    return (
        <div>
            <div className="movie-summary">
                {poster_path ?
                    <img className="poster"
                         alt=""
                         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} /> :
                    <div className="poster skeleton-poster"/>}
                <div className="right">
                    {title.length ?
                        <div className="title">
                            <Link to={`/movie-details/${id}`}>
                                {title} <span className="release-year">({releaseYear})</span>
                            </Link>
                        </div> :
                        <div className="title skeleton-title"/>}
                    <StarRating rating={vote_average} />
                    {overview.length ?
                        <div className="overview">{overview}</div> :
                        <div className="overview skeleton-overview" />}
                    {title.length ?
                        <div className="movie-details-link">
                            <Link to={`/movie-details/${id}`}>
                                See details
                            </Link>
                        </div>:
                        <div className="movie-details-link skeleton-movie-details-link" />}
                </div>
            </div>
        </div>
    )
};

export default Movie;
