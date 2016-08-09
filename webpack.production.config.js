const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
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
      exclude: /node_modules|bower_components/,
      loader: 'babel',
    }, {
      test: /\.scss$/,
      include: /src/,
      loader: ExtractTextPlugin.extract('css!postcss!sass'),
    }],
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions'],
    }),
  ],

  plugins: [
    new CleanWebpackPlugin(['build'], { verbose: true }),
    new webpack.BannerPlugin('Copyright Eduard Trutsyk React-Starter.'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/client/index.tmpl.html'),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('main.css'),
  ],
};
