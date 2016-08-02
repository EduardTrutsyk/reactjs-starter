var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/build',
    filename: '[name]-[hash].js'
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
    }]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new CleanWebpackPlugin(['build'], { verbose: true }),
    new webpack.BannerPlugin('Copyright Eduard Trutsyk React-Starter.'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ],
};
