const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devConfig = require('./dev');
const { version } = require('../package.json');
const { resolve } = require('path');

module.exports = {
    ...devConfig,
    devtool: false,
    mode: 'production',
    output: {
        ...devConfig.output,
        filename: `app.${version}.min.js`,
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: `app.${version}.min.css` }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
            filename: resolve(__dirname, '../public/index.html'),
        }),
    ],
};
