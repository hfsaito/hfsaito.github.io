const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const notionWidgetFiles = fs.readdirSync('./src/notion-widgets');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'docs'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
      new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      templateParameters: {
        title: 'Template',
      }
    }), new HtmlWebpackPlugin({
      filename: '404.html',
      inject: false,
      template: path.resolve(__dirname, 'src', '404.ejs'),
    }),
    ...(notionWidgetFiles.map(file => new HtmlWebpackPlugin({
      filename: 'notion-widgets/' + file.replace('.ejs', '.html'),
      inject: false,
      template: path.resolve(__dirname, 'src/notion-widgets', file),
    })))
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
};