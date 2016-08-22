const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const config = require('./index');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
  // devtool: 'eval-source-map',
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
