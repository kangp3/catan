const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // NOTE: This order is very important. Loaders are executed bottom-up
          // and sequentially transform code. See
          // https://webpack.js.org/concepts/loaders/#loader-features
          //
          // For more info on these style loaders in particular, see
          // https://stackoverflow.com/a/43953484
          {
            // Translates CSS into <style> tags in the DOM
            loader: "style-loader",
          },
          {
            // Translates CSS files into importable Javascript modules
            loader: "css-loader",
            options: {
              // This is required for
              //   import styles from './styles.scss'
              // syntax
              modules: true,
            },
          },
          {
            // Translates SCSS files into CSS
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      // This points webpack at the correct index.html file that bootstraps the
      // entire application
      template: "src/index.html",
    }),
    new webpack.EnvironmentPlugin(["API_URL"]),
  ],
  resolve: {
    // This is essentially the "path" that webpack searches to resolve imports.
    // This enables the use of
    //   import 'containers/App'
    // syntax as opposed to relative path syntax
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    // Load all assets relative to the root path rather than the request's
    // path. Without this, the browser tries to retrieve main.js from a path
    // relative to the current page and raises a 404. For example, a request to
    // /play/asdf would raise a 404 on resource /play/main.js
    publicPath: "/",
  },
  // Generate source maps for Chrome debugger to map generated JS back to
  // original TypeScript code
  devtool: "source-map",
  devServer: {
    // Redirect all 404 requests to index.html
    // Required to leverage react-router-dom routing since no concrete resource
    // is being served outside of /
    historyApiFallback: true,
  },
};
