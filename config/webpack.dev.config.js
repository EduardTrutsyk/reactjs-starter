const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const config = require('./index');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  debug: true,
  // devtool: 'eval-source-map',
  // devtool: 'source-map',
  devtool: 'cheap-module-eval-source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],

  devServer: {
    port: config.env.PORT,
    host: config.env.HOST,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    progress: true,
    stats: 'minimal',
  },
});
