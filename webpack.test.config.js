var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var TEST_PATH = path.resolve(ROOT_PATH, 'tests');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  entry: 'mocha!./tests/test.js',
  output: {
    filename: 'test.build.js',
    path: TEST_PATH
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Test case',
      template: path.resolve(TEM_PATH, 'test.html')
    }),
  ]
}
