var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });


module.exports = {
    // 页面入口文件配置
    entry : "./app.js",
    // 入口文件输出配置
    output : {
        path: __dirname + '/dist/',
        filename: 'app.bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query:{
                presets:['es2015','react']
            }
        },
        {
            // 图片加载器
            test:/\.(png|jpg|gif|jpeg)$/,
            loader: 'url-loader?limit=2048'
        },
        {
            // 字体加载器
            test:/\.(woff|ttf|svg|eot)$/,
            loader: 'url-loader?limit=10000'
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
        ]        
    },
    // 插件项
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './index.html',
            inject: 'body' // Inject all scripts into the body 
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        // new webpack.DefinePlugin({
        //   'process.env.NODE_ENV': JSON.stringify('production')
        // })
    ]
}