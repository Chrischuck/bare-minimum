/* eslint-disable */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  context: __dirname + '/src', 
  entry: {
    app: './index.js', 
    vendor: [
      'react',
      'react-dom',
      'preact',
      'preact-compat',
      'preact-helmet'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'react': 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat'
  },
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.bundle\.js$/, loader: 'bundle-loader', options: { lazy: true } },      
      { test: /\.eot/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject' },
      { test: /\.ttf/, loader: 'url-loader?mimetype=application/x-font-ttf' },
      { test: /\.woff/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2/, loader: 'url-loader?mimetype=application/font-woff2' },
      { test: /\.svg$/, loader: "svg-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.(jpe?g|png)$/i, loaders: [
            'file-loader?hash=sha512&digest=hex',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ] },
      { test: /manifest.json$/, loader: 'file-loader?name=manifest.json!web-app-manifest-loader' },
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
  
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.LoaderOptionsPlugin({
       minimize: true,
       debug: false
     }),
    new webpack.optimize.ModuleConcatenationPlugin(),         
    new HtmlWebpackPlugin({
      title: 'Bare Minimum',
      filename: 'index.html',
      template: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
      }
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
    new CopyWebpackPlugin([
      { from: '../_redirects' },
      { from: '../manifest.json' }
    ]),
    new OfflinePlugin({
      caches: {
        main: ['*.bundle.js', 'index.html', 'styles.css', '*.png', '*.ico', 'manifest.json'],
        additional: [],
        optional: []
      },
      AppCache: false,
      externals: ['/', '/grade-calculator'],
      ServiceWorker: {
        output: 'baremin-sw.js',
        minify: true
      }
    })
  ]
}
