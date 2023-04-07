const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    hot: true,
    port: 8001
  },
  resolve: {
    extensions: ['.jsx','.js','.ts','.tsx']
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /(.ts|.tsx)$/i,
        exclude: /node_modules/,
        loader: 'ts-loader'
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
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button',
        './utils': './src/utils/index'
      },
      shared: {
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