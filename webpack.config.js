const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, options) => {
    let production = options.mode === 'production';

    let devtool = production ? false : 'eval-sourcemap';

    let  CssLoaderMode = production
        ? ExtractTextPlugin.extract({ use: [
                {loader: 'css-loader', options: { minimize: true } },
                {loader: 'postcss-loader', options: {  config: { path: 'config/PostCSS/postcss.config.js'} } },
                'sass-loader'
            ]})
        : ['style-loader','css-loader','sass-loader'];

    return {
        entry: {
            index: path.resolve(__dirname, './src/index')
        },
        output: {
            path: path.join(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.scss$/,
                    exclude: '/node_modules/',
                    use: CssLoaderMode
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            stats: "errors-only",
            open: true,
            https: true
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                cache: true
            }),

            new ExtractTextPlugin("index.css")
        ],
        devtool: devtool
    }
};
