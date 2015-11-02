var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    path: 'dist',
    filename: 'components.js'
  },
  plugins: [
    new ExtractTextPlugin('components.css')
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=2&sourceMap!autoprefixer?browsers=last 2 versions!less'),
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        loader: 'style!css?importLoaders=1&sourceMap!autoprefixer?browsers=last 2 versions',
        exclude: /node_modules/
      }
    ]
  }
}
