'use strict';

const webpack =  require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        // search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    // watch: {
    //     watch: true,
    //     watchOptions: {
    //         ignore: /node_modules/,
    //         aggregateTimeout: 300,
    //         poll:1000
    //     }
    // },
    module: {
        rules: [
            {
                test: /.js$/, 
                use: 'babel-loader'
            },
            {
                test:  /.vue$/, 
                use: 'vue-loader'
            },
            { 
                test: /.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test:/.(jpg|svg|png|jpeg|gif)$/,
                use: 'file-loader'
            }
        ],
    },
    plugins:[
        // new HtmlWebpackPlugin({template: './src/index.html'})
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    },
}