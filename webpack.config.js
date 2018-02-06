var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.css'],
        alias: {
            slick: path.resolve(__dirname, 'node_modules/slick-carousel/slick/')
        }
      },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/, 
                loaders: ['style-loader', 'css-loader?modules'],
            },
            { test: /\.(eot|svg|woff|ttf|gif)$/, loader: 'url-loader' }
        ]
    },
    devtool: 'inline-source-map'
    
};