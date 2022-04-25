const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: 'body',
    template: path.resolve(__dirname, 'src', 'index.ejs'),
    templateParameters: {
      title: 'Template',
    }
  }), new HtmlWebpackPlugin({
    filename: '404.html',
    inject: undefined,
    template: path.resolve(__dirname, 'src', '404.ejs'),
  })],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
};