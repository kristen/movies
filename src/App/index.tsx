import React from 'react';
import PopularMovies from "../PopularMovies";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import MovieDetails from "../MovieDetails";
import SearchList from "../SearchList";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/movie/:movieId"
                       component={MovieDetails}>
                </Route>
                <Route path="/search"
                       component={SearchList} />
                <Route path="/">
                    <PopularMovies />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
