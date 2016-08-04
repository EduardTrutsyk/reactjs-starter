const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-source-map',
  // devtool: 'eval-source-map',
  // devtool: 'eval',
  entry: path.join(__dirname, '/src/client'),
  output: {
    path: path.join(__dirname, '/build/client'),
    filename: 'main.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
      loader: 'file-loader',
    }, {
      test: /\.scss$/,
      include: /src/,
      loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap'),
      //loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      //loaders: ['style-loader', 'css-loader', 'postcss-loader']
      //loaders: ExtractTextPlugin.extract('css!sass') //['style', 'css', 'sass']
      //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')
      //loader: 'style!css!postcss!sass?sourceMap'
    }],
  },

  postcss: [
    autoprefixer({
      browsers: ['last 3 versions'],
    }),
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/client/index.tmpl.html'),
    }),
    new ExtractTextPlugin('main.css', {
      allChunks: true,
    }),
  ],

  devServer: {
    port: 8080,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
};
