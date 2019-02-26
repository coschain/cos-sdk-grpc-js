const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = [{
    entry: {
        'sdk': "./src/index.ts"
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'sdk',
        libraryTarget: "umd"
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
    plugins: [
        new webpack.DefinePlugin({
            'USE_TLS': process.env.USE_TLS !== undefined
        })
    ]
}, {
    entry: {
        'sdk.min': "./src/index.ts"
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'sdk',
        libraryTarget: "umd"
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
