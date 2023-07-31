const webpack = require("webpack");
path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    entry: "./src/client/index.js",
    mode: "production",
    devtool: "hidden-source-map",
    optimization: {
        minimizer: [
            new TerserPlugin({}),
            
        ]
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]       
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/client/views/index.html',
            filename: './index.html' 
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],


};
