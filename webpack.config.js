const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.js',
    devtool: isDevelopment ? 'inline-source-map' : false, // Only use source maps in development
    devServer: isDevelopment ? {
        static: './dist',
        watchFiles: ['./src/index.html'],
    } : undefined,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo List',
            template: './src/index.html',
            minify: false
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimize: true, // Enables minification
    },
};
