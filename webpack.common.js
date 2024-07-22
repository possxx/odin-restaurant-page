const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['./src/index.js', "./src/style.css"],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ],
            exclude: /\.module\.css$/i,
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoader: 1,
                modules: true
              },
            },
          ],
          include: /\.module\.css$/i,
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
    }),
    new MiniCssExtractPlugin()
  ],
};