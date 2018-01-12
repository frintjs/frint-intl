var webpack = require('webpack');
var externals = require('frint-config').externals;

var minify = process.env.DIST_MIN;
var plugins = !minify
  ? []
  : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
    }),
  ];
var filename = !minify
  ? 'frint-intl.js'
  : 'frint-intl.min.js';

module.exports = {
  entry: __dirname + '/src',
  output: {
    path: __dirname + '/dist',
    filename: filename,
    libraryTarget: 'umd',
    library: 'FrintIntl',
  },
  externals: externals,
  target: 'web',
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'travix'
          ],
        },
      },
    ],
  },
};
