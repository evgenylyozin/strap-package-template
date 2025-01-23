// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: false, // use ES2015 for both Node and Browser by default
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
