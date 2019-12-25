const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './index.js',
    vendor: ['preact', 'preact-helmet']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].chunkhash.bundle.js',
    chunkFilename: '[name].chunkhash.bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        loader: 'bundle-loader',
        options: { lazy: true }
      },
      {
        test: /\.eot/,
        loader: 'url-loader?mimetype=application/vnd.ms-fontobject'
      },
      { test: /\.ttf/, loader: 'url-loader?mimetype=application/x-font-ttf' },
      { test: /\.woff/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2/, loader: 'url-loader?mimetype=application/font-woff2' },
      { test: /\.svg$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName:
                  process.env.NODE_ENV === 'production'
                    ? '[hash:base64:5]'
                    : '[name]__[local]___[hash:base64:5]'
              }
            }
          }
        ]
      },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.ico$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(jpe?g)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /manifest.json$/,
        loader: 'file-loader?name=manifest.json!web-app-manifest-loader'
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
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
    new MiniCssExtractPlugin(),

    ...(process.env.NODE_ENV === 'production'
      ? [
          new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
          }),
          new webpack.optimize.ModuleConcatenationPlugin(),
          new webpack.optimize.AggressiveMergingPlugin(),
          new FaviconsWebpackPlugin({
            logo: './assets/logo.png',
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
              main: [
                '*.bundle.js',
                'index.html',
                'styles.css',
                '*.png',
                '*.ico',
                'manifest.json',
                ' *.js'
              ],
              additional: [],
              optional: []
            },
            cacheMaps: [
              {
                match: function(requestUrl) {
                  return new URL('/', location)
                },
                requestTypes: ['navigate']
              }
            ],
            AppCache: false,
            externals: ['/', '/grade-calculator'],
            ServiceWorker: {
              output: 'baremin-sw.js',
              minify: true
            }
          })
        ]
      : [])
  ]
}
