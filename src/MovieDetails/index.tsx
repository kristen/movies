import React from 'react';
import {RouteComponentProps} from "react-router";
import './index.css';
import StarRating from "../StarRating";
import CastMember from "../CastMember";

interface Movie {
    backdrop_path: string|null;
    overview: string|null;
    vote_average: number;
    id: number;
    title: string;
    poster_path: string|null;
    release_date: string;
    genres: {id: number, name: string}[];
    runtime: number;
    credits: {
        cast: Cast[];
    }
}

export interface Cast {
    cast_id: number;
    character: string;
    name: string;
    profile_path: string|null;
}

interface State {
    movie?: Movie;
}

interface RouteMatch {
    movieId: string;
}

type Props = RouteComponentProps<RouteMatch>;

class MovieDetails extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            movie: undefined,
        };
        const {match: {params: {movieId}}} = this.props;
        fetch(`/movie/${movieId}`).then(response => response.json()).then(
            response => {
                this.setState({
                    movie: response,
                });
            }
        )
    }
    render() {
        const {movie} = this.state;
        if (!movie) {
            return (
                <div className="movie-detail">
                    <div className="header">
                        <div className="poster skeleton"/>
                        <div className="right">
                            <h1 className="title skeleton"/>
                            <p className="release-date skeleton" />
                            <p className="overview skeleton"/>
                            <div className="runtime skeleton"/>
                            <div className="genre skeleton"/>
                        </div>
                    </div>
                    <div className="cast skeleton" />
                </div>
            )
        }
        const releaseDate = new Date(movie.release_date).toLocaleDateString(
            "en-US", { year: 'numeric', month: 'long', day: 'numeric' });
        return (
            <div className="movie-detail">
                <div className="header">
                    <img className="poster"
                         alt=""
                         src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
                    <div className="right">
                        <h1 className="title">{movie.title}</h1>
                        <div className="release-date"><strong>Release Date:</strong> {releaseDate}</div>
                        <StarRating rating={movie.vote_average} size="large" />
                        <div className="overview">
                            <h2>Overview</h2>
                            <p>{movie.overview}</p>
                        </div>
                        <div className="runtime">
                            <strong>Runtime: </strong>
                            {movie.runtime} min
                        </div>
                        <div className="genre">
                            <strong>Genres: </strong>
                            {movie.genres.map(genre => genre.name).join(', ')}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cast">
                        <h2>Cast</h2>
                        <div className="cast-members">
                            {movie.credits.cast.slice(0, 5).map(cast =>
                                <CastMember key={cast.cast_id} {...cast} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;
