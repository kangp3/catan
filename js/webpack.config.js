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
    // This is essentially the "path" that webpack searches to resolve
    // imports. This enables the use of
    //   import 'containers/App'
    // syntax as opposed to relative path syntax
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js"],
  },
  // Generate source maps for Chrome debugger to map generated JS back to original
  // TypeScript code
  devtool: "source-map",
};
