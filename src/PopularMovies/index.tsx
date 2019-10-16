import React from 'react';
import Movie, {MovieSummary} from "../Movie";
import './index.css';

interface Props {}

interface State {
    popularMovies: MovieSummary[];
}

class PopularMovies extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
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
        this.state = {
            popularMovies: [
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
                skeletonMovieSummary(fakeId++),
            ],
        };
        fetch('/movies/popular').then(response => response.json()).then(
            response => {
                this.setState({
                    popularMovies: response.results,
                });
            }
        )
    }
    render() {
        return (
            <div>
                <h1>Popular Movies</h1>
                <div className="popular-movies">
                    {this.state.popularMovies.map(movie =>
                        <Movie key={movie.id} {...movie} />)
                    }
                </div>
            </div>
        )
    }
}

export default PopularMovies;
