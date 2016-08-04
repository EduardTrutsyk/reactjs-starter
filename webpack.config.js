var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

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
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }, {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
          loader: 'file-loader'
        },
        {
          test: /\.scss$/,
          include: /src/,
          loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')
          //loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
          //loaders: ['style-loader', 'css-loader', 'postcss-loader']
          //loaders: ExtractTextPlugin.extract('css!sass') //['style', 'css', 'sass']
          //loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
          //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')
          //loader: 'style!css!postcss!sass?sourceMap'
        }
      ]
  },

  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ],

  plugins: [
    //new CleanWebpackPlugin(['build'], { verbose: true }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html'
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ],

  devServer: {
    port: 8080,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
