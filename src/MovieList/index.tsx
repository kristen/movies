import React from 'react';
import Movie, {MovieSummary} from "../Movie";
import './index.css';

interface Props {
    movies?: MovieSummary[];
}

const MovieList: React.FC<Props> = ({movies}) => {
    let fakeId = 0;
    const skeletonMovieSummary = (id: number) => ({
        poster_path: null,
        adult: false,
        overview: "",
        release_date: "",
        genre_ids: [],
        id,
        original_title: "",
        title: "",
        backdrop_path: null,
        popularity: 0,
        vote_count: 0,
        video: false,
        vote_average: 0,
    });
    const movieList = movies ?
        movies : [
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId++),
            skeletonMovieSummary(fakeId),
        ];
    return (
        <div>
            <div className="movie-list">
                {movieList.map(movie =>
                    <Movie key={movie.id} {...movie} />)
                }
            </div>
        </div>
    )
};

export default MovieList;
