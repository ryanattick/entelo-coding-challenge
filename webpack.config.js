var HTMLWedpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWedpackPlugin({
  template: __dirname + '/dist/index.html',
  filename: 'index.html',
  inject: 'body'
});
var path = require('path');

module.exports = {
  entry: __dirname + '/index.js',
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['react']
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/dist'
  },
};
