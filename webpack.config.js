var path = require('path');
module.exports = {
    entry: "./public/javascripts/src/main.jsx",
    output: {
        path: './public/javascripts/build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, include: path.join(__dirname, 'public/javascripts/src'), exclude: /node_modules/, loaders: ['babel-loader']},
            { test: /\.js$/, include: path.join(__dirname, 'public/javascripts/src'),  exclude: /node_moduels/, loaders: ['babel-loader']},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
};
