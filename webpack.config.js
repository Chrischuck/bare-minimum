/* eslint-disable */
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');


var dashboard = new Dashboard();

module.exports = {

  /////////// Sets up entra and output code ////////
  context: __dirname + '/src', // directory webpack looks //
  entry: [
    'babel-polyfill',
    './index.js', // file webpack looks at //
  ],
  output: {
    filename: 'app.js', // output file name //
    path: __dirname + '/dist' // output file directory //
  },


  /////////// Sets up loaders ////////
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
  },
    extensions: ['', '.js', '.jsx', '.json', '.css']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.eot/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject' },
      { test: /\.ttf/, loader: 'url-loader?mimetype=application/x-font-ttf' },
      { test: /\.woff/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2/, loader: 'url-loader?mimetype=application/font-woff2' },
      { test: /\.svg$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "url-loader?limit=100000" },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react", "stage-0"],
          plugins: [
              ["transform-decorators-legacy"],
              ["transform-runtime"]
            ]
          }
      },


    ]
  },

  devServer: {
    hot: true,
    quiet: true, // lets WebpackDashboard do its thing
    historyApiFallback: true,
  },

  ////////// Plug ins! ///////////
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new HtmlWebpackPlugin({
      title: 'Bare Minimum',
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new ExtractTextPlugin("styles.css")
  ]

}
