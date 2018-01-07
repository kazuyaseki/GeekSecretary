const path = require("path");
const webpack = require("webpack");
const LicenseWebpackPlugin = require("license-webpack-plugin");

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  })
];

module.exports = {
  entry:
    process.env.NODE_ENV === "production"
      ? ["./src/main.ts"]
      : [
          "react-hot-loader/patch",
          "webpack-dev-server/client?http://localhost:3355",
          "webpack/hot/only-dev-server",
          "./src/main.tsx"
        ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "public/",
    historyApiFallback: true,
    port: 3355,
    hot: true
  },
  plugins:
    process.env.NODE_ENV === "production"
      ? BASE_PLUGINS.concat([
          new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            compressor: {
              warnings: false
            },
            output: {
              comments: false
            }
          }),
          new LicenseWebpackPlugin({
            pattern: /^(.*)$/,
            filename: "licenses.txt"
          })
        ])
      : BASE_PLUGINS.concat([
          new webpack.NamedModulesPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
          new webpack.HotModuleReplacementPlugin()
        ]),
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: []
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
