const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "/public")
  },
  devServer: {
    contentBase: path.join(__dirname, "/public")
  },
  devtool: "cheap-eval-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
