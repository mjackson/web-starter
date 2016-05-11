const webpack = require('webpack')

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
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
