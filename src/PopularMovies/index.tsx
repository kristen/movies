import React from 'react';
import {MovieSummary} from "../Movie";
import MovieList from "../MovieList";
import SearchMovie from "../SearchMovie";

interface Props {}

interface State {
    movies?: MovieSummary[];
}

class PopularMovies extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { movies: undefined };
        fetch('/api/movies/popular').then(response => response.json()).then(
            response => {
                this.setState({
                    movies: response.results,
                });
            }
        )
    }
    render() {
        return (
            <div>
                <SearchMovie />
                <h1>Popular Movies</h1>
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default PopularMovies;
