const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const port = 3001;
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/status', (req, res) => {
    return res.send('OK');
});

const apiKey = '?api_key=75b9387059d3bb6140f868f1a4c771ac';
const baseUrl = 'https://api.themoviedb.org/3';

const MAX_OVERVIEW_SUMMARY_LENGTH = 300;
const trimOverview = movie => {
    const overview = movie.overview;
    const trimmedOverview = overview.length > MAX_OVERVIEW_SUMMARY_LENGTH ?
        `${overview.substring(0, MAX_OVERVIEW_SUMMARY_LENGTH)}...` :
        overview;
    return {...movie, overview: trimmedOverview};
};
const mapSummaryResponse = data => {
    const results = data.results;
    const updatedResults = results.map(trimOverview);
    return {...data, results: updatedResults};
};

app.get('/movies/popular', (req, res, next) => {
    fetch(`${baseUrl}/movie/popular${apiKey}`)
        .then(res => res.json())
        .then(data => {
            res.send(mapSummaryResponse(data));
        })
        .catch(err => {
            next(err);
        });
});

app.get('/search/movie', (req, res, next) => {
    fetch(`${baseUrl}/search/movie${apiKey}&query=${req.query.search}`)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            next(err);
        });
});

app.get('/movie/:movieId', (req, res, next) => {
    console.log('params', req.params);
    fetch(`${baseUrl}/movie/${req.params.movieId}/images${apiKey}`)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            next(err);
        });
});

app.listen(port, () => console.log(`listening on port ${port}`));
