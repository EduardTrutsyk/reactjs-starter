var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      include: /src/,
      //loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      loader: ExtractTextPlugin.extract('css!postcss!sass')
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
    new ExtractTextPlugin("[name].css")
  ],
};
