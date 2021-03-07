const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index"),
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.[hash].js",
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/template.html",
      title: "Collision Canvas",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  // devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "/dist/"),
    inline: true,
    host: "localhost",
    port: 5000,
  },
};
