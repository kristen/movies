import React from 'react';
import PopularMovies from "../PopularMovies";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import MovieDetails from "../MovieDetails";
import SearchList from "../SearchList";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/movie-details/:movieId"
                       component={MovieDetails}>
                </Route>
                <Route path="/search-movie"
                       component={SearchList}>
                </Route>
                <Route path="/">
                    <PopularMovies />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
