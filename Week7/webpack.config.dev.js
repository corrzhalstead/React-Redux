const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

// const assetLoader = {
//   loader: assetRule.loader,
//   options: assetRule.options || assetRule.query
// };



process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  // output: {
  //   path: 'build/',
  //   publicPath: '/assets',
  //   filename: "bundle.js"
  // },
    output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      },

    //  {
    //     test: /\.(png|jpg|svg|jpeg|gif|ico|woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)$/,
    //     loader: 'file-loader?name=/img/[name].[ext]'
       
    //   },
   ],
//     rules:unshift({
//   test: /\.svg$/,
//   use: ["@svgr/webpack", assetLoader]
// })


 
  }
};
