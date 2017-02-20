/* eslint-disable */
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require('purifycss-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');




module.exports = {

  /////////// Sets up entra and output code ////////
  context: __dirname + '/src', // directory webpack looks //
  entry: {
    app: './index.js', // file webpack looks at //
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'sweetalert2',
      'preact',
      'preact-compat',
      'react-helmet'
    ]
  },
  output: {
    path: __dirname+ '/dist',
    filename: 'bundle.js'
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
      { test: /\.svg$/, loader: "svg-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(jpe?g|png)$/i, loaders: [
            'file?hash=sha512&digest=hex',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ] },
      {test: /manifest.json$/, loader: 'file-loader?name=manifest.json!web-app-manifest-loader' },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react", "stage-0"]

          }
      },


    ]
  },
  ////////// Plug ins! ///////////
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", 'vendor.js'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      comments: true,
      beautify: false,
      mangle: true,
      compress: {
        sequences: true,
    		dead_code: true,
    		conditionals: true,
    		booleans: true,
    		unused: true,
    		if_return: true,
    		join_vars: true,
    		drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Bare Minimum',
      filename: 'index.html',
      template: './index.html',
      inject: true
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
   new SWPrecacheWebpackPlugin(
      {
        cacheId: 'bareminimum',
        filename: 'bareminimumSW.js',
        maximumFileSizeToCacheInBytes: 4194304,
        minify: true,
        runtimeCaching: [
          {
            urlPattern: /grade-calculator/,
            handler: 'cacheFirst',
          },
          {
            urlPattern: /gpa-calculator/,
            handler: 'cacheFirst',
          }
      ],
      }
    )
    //new BundleAnalyzerPlugin()
  ]

}
