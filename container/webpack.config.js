const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    hot: true,
    port: 8002
  },
  resolve: {
    extensions: ['.jsx','.js','.ts','.tsx']
  },
  module: {
    rules: [
      {
        test: /(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // 把带有css样式的style标签添加到html
          },
          {
            loader: "css-loader", // 加载css
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        app1: 'app1@http://localhost:8001/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps['react']
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        }
      }
    })
  ]
}