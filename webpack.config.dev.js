const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        test: /\.jsx?$/,
        exclude: "node_modules",
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
}