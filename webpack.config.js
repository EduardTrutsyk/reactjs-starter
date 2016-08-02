var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  //devtool: 'eval-source-map',
  //devtool: 'eval',
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      //loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      loader: 'style!css?modules!postcss'
    }]
    // {
    //   test: /\.scss$/,
    //   //loaders: ['style', 'css', 'sass']
    //   loaders: ExtractTextPlugin.extract('css!sass')
    // }]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new webpack.BannerPlugin('Copyright Eduard Trutsyk React-Starter.'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()
    // new ExtractTextPlugin('main.css', {
    //   allChunks: true
    // })
    //new ExtractTextPlugin("[name]-[hash].css")
  ],

  devServer: {
    port: 8080,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
