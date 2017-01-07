const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboard = new Dashboard();

module.exports = {

  // ///////// Sets up entra and output code ////////
  context: `${__dirname}/src`, // directory webpack looks //
  entry: './index.js', // file webpack looks at //

  output: {
    filename: 'app.js', // output file name //
    path: `${__dirname}/dist`, // output file directory //
  },


  // ///////// Sets up loaders ////////
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },

  devServer: {
    publicPath: settings.output.publicPath,
    hot: true,
    quiet: true, // lets WebpackDashboard do its thing
    historyApiFallback: true,
  },

  // //////// Plug ins! ///////////
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new HtmlWebpackPlugin({
      title: 'Bare Minimum',
      filename: 'index.html',
      template: './index.html',
      inject: true,
    }),
  ],


};
