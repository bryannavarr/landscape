var path = require("path");
// const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: [
    // 'babel-polyfill',
    "./src/js/main.js",
    "webpack-dev-server/client?localhost:8095"
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json", "css"]
  },
  output: {
    publicPath: "/src/js/",
    filename: "main.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./src",
    host: "localhost",
    port: "8095"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "app"),
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  node: {
    fs: "empty"
  }
  // plugins: [new Dotenv()]
};
