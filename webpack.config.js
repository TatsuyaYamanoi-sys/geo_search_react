const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
const publidDir = path.join(__dirname, '/public');
module.exports = [
  {
    entry: [
      './src/index.js',
    ],//参照元ファイル
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js',
    },//path: publicPath: 出力先, filename: コンパイルファイル
    module: {
      rules: [
        {
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          ],
        },
      ],
    },//loader: babel, presets: 何をコンパイルするか
    resolve: {
      extensions: ['.js', '.jsx'],
    },//extensions: 参照拡張子
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir,
    },
  },//ルートディレクトリ設定
  {
    mode: "development",
    entry: {
      style: "./style/index.scss",
    },
    output: {
      path: publidDir,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" })],
  },//scssコンパイル設定
];