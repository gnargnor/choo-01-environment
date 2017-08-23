const express = require('express');
import webpack from 'webpack';
// import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import config from './webpack.config';
import open from 'open';

const app = express();
const port = process.env.PORT || 5000;
const compiler = webpack(config);

// app

app.use("/dist", express.static("dist"));

app.get('/', (req, res) => {
    console.log('Serving ', req.url, __dirname);
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`)
    }
});