const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client',

  output: {
    path: './dist/client',
    filename: '[name].js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html',
      //   exclude: ['./src/index.html'],
      // },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[ext]',
      },
    ],
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions'],
    }),
  ],

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/client/assets',
      to: 'assets',
    }]),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
    }),
  ],
};
