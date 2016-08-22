const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.config');
const config = require('./index');

module.exports = webpackMerge(commonConfig, {
  // devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loader: ExtractTextPlugin.extract('css!postcss!sass'),
      },
    ],
  },

  htmlLoader: {
    minimize: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
