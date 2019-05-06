

const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        modules: [
            'react',
            'react-dom',
            'react-router',
            'react-router-dom'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: '[name].js',
        library: '[name]',
        sourceMapFilename: "[name].map",
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
}