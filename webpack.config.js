/* eslint-disable */
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')


var dashboard = new Dashboard();

module.exports = {

  context: __dirname + '/src',
  entry: [
    'babel-polyfill',
    './index.js', 
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/dist' 
  },

  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
  },
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.bundle\.js$/, loader: 'bundle-loader', options: { lazy: true } },      
      { test: /\.eot/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject' },
      { test: /\.ttf/, loader: 'url-loader?mimetype=application/x-font-ttf' },
      { test: /\.woff/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2/, loader: 'url-loader?mimetype=application/font-woff2' },
      { test: /\.svg$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.ico$/, loader: "url-loader?limit=100000" },
       { test: /\.(jpe?g)$/i, loaders: [
            'file-loader?hash=sha512&digest=hex',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ] },
      {test: /manifest.json$/, loader: 'file-loader?name=manifest.json!web-app-manifest-loader' },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
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
    quiet: true, 
    historyApiFallback: true,
  },

  plugins: [
    new DashboardPlugin(dashboard.setData),
    new HtmlWebpackPlugin({
      title: 'Bare Minimum',
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new FaviconsWebpackPlugin({
      logo: './assets/Bm144.png',
      icons: {
       android: false,
       appleIcon: false,
       appleStartup: false,
       coast: false,
       favicons: true,
       firefox: false,
       opengraph: false,
       twitter: false,
       yandex: false,
       windows: false
     }
    }),
    new ExtractTextPlugin("styles.css")
  ]
}
