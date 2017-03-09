const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./index.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/dist"),
    publicPath: "/dist"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "node_modules",
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}