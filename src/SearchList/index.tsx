import React from 'react';
import {MovieSummary} from "../Movie";
import MovieList from "../MovieList";
import {RouteComponentProps} from "react-router";
import SearchMovie from "../SearchMovie";

type Props = RouteComponentProps<{}>;

interface State {
    movies?: MovieSummary[];
}

class SearchList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        console.log(props);
        const {location: {search}} = this.props;
        this.state = { movies: undefined };
        fetch(`/search/movie${search}`).then(response => response.json()).then(
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
                <h1>Movie Search Results</h1>
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default SearchList;
