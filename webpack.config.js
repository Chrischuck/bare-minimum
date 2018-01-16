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
    './index.js', 
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/dist' 
  },
  module: {
    loaders: [
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
        loader: 'babel-loader'
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
    new ExtractTextPlugin("styles.css")
  ]
}
