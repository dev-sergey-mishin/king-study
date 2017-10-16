const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'dev';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('bundle.css');

module.exports = {
    entry: [
        './frontend/entry.js'
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.less$/i, loader: extractLESS.extract(['css','less'])},
            {
                test: /\.(png|jpg|gif|svg|otf)$/,
                loader: 'url-loader',
                include: includeLocations()
            }
        ]
    },
    //watch: NODE_ENV === 'dev',
    plugins: [
        extractLESS,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({ NODE_ENV: JSON.stringify(NODE_ENV) }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }
};

function includeLocations() {
    return [
        path.resolve(__dirname, "frontend")
    ]
}

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences : true,
                booleans : true,
                loops : true,
                unused : true,
                warnings : false,
                drop_console : true,
                unsafe : true
            }
        })
    );
}
