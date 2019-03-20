const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = [{
    entry: {
        'sdk': "./src/index.ts"
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'sdk',
        libraryTarget: "umd",
        globalObject: "this"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: /src|_proto/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new webpack.DefinePlugin({
            'USE_TLS': process.env.USE_TLS !== undefined
        })
    ],

}, {
    target: "node",
    entry: {
        'sdk': "./src/index.ts"
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].node.js',
        library: 'sdk',
        libraryTarget: "umd",
        globalObject: "this"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: /src|_proto/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new webpack.DefinePlugin({
            'USE_TLS': process.env.USE_TLS !== undefined
        })
    ]
}];
