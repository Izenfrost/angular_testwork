const webpack = require('webpack')

const path = require('path');

module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
