import React from 'react';
import Movie, {MovieSummary} from "../Movie";
import './index.css';

interface Props {}

interface State {
    popularMovies: MovieSummary[];
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const blankMovieSummary = {
            poster_path: null,
            adult: false,
            overview: "",
            release_date: "",
            genre_ids: [],
            id: 0,
            original_title: "",
            title: "",
            backdrop_path: null,
            popularity: 0,
            vote_count: 0,
            video: false,
            vote_average: 0,
        };
        this.state = {
            popularMovies: [
                blankMovieSummary,
                blankMovieSummary,
                blankMovieSummary,
                blankMovieSummary,
                blankMovieSummary,
                blankMovieSummary,
                blankMovieSummary,
                blankMovieSummary,
            ],
        };
        fetch('/movies/popular').then(response => response.json()).then(
            response => {
                this.setState({
                    popularMovies: response.results
                });
            }
        )
    }
    render() {
        return (
            <div>
                <h1>Popular Movies</h1>
                {this.state.popularMovies
                    .map(movie => <Movie {...movie} />)
                }
            </div>
        )
    }
}

export default App;
