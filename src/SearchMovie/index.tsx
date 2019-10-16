import React from "react";
import './index.css';

const SearchMovie: React.FC = () => {
    return (
        <div className="search-movie">
            <form action="/search">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit">search</button>
            </form>
        </div>
    )
};

export default SearchMovie;
