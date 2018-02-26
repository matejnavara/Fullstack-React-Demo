var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};