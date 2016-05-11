const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const AssetURLPrefix = process.env.STATIC_ASSETS ? '[hash:8]/' : ''

module.exports = {
  entry: './modules/client/entry.js',

  output: {
    path: './public/assets',
    filename: `${AssetURLPrefix}/[name].js`,
    publicPath: '/assets/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin(`${AssetURLPrefix}/styles.css`),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],

  postcss: () => [ autoprefixer ]
}
