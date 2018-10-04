const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

const locations = [
    path.resolve(__dirname, 'frontend'),
];

const common = {
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',

    plugins: [
        new webpack.DefinePlugin({
            dirName: '__dirname',

        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    optimization: {
        minimize: NODE_ENV === 'production'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    }
};

const frontend = {
    entry: ['babel-polyfill', './frontend/entry.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        chunkFilename: 'chunk.[name].js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js$/],
                include: locations,
                use: { loader: 'babel-loader' }
            }, {
                test: /\.(png|jpg|gif|svg|otf|mp4|webp)$/,
                include: locations,
                use: { loader: 'url-loader' }
            }, {
                test: /\.less$/,
                include: locations,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'   },
                    { loader: 'less-loader'  }
                ]
            },
        ],
    },
};

module.exports = [
    Object.assign({} , common, frontend)
];