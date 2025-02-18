// webpack.config.js
import path from "path";

const __dirname = path.resolve();
export default {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.prod.json"),
          },
        },
      },
    ],
  },
  optimization: {
    usedExports: false, // disable tree-shaking so that all exports are included
  },
};
