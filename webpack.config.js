const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const entry = glob.sync('./src/*/index.ts').reduce((entries, entry) => {
  const entryKey = entry.replace(/\.\/src\/(?:index\/)?(.*index).ts/g, '$1');
  entries[entryKey] = entry;
  return entries;
}, {});

const alias = glob.sync('./src/*/index.ts').reduce((aliases, entry) => {
  const absolutePath = entry.replace(/\.\/(src.*)\/index.ts/g, '$1');
  let relativePath = entry.replace(/\.\/src\/(.*)\/index.ts/g, '$1');
  // if (relativePath === 'index') {
  //   relativePath = '';
  // }
  const aliasNames = fs.readdirSync(absolutePath)
    .filter(fileOrDir => fs.lstatSync(absolutePath + '/' + fileOrDir).isDirectory());

  const buildAlias = (aliasName) => '@/' + path.join(relativePath, aliasName);
  const buildPath = (aliasName) => path.resolve(__dirname, absolutePath, aliasName);

  aliasNames.map(aliasName => [buildAlias(aliasName), buildPath(aliasName)])
    .forEach(([k, v]) => aliases[k] = v);
  return aliases;
}, {});

const plugins = glob.sync('./src/**/*.ejs').map(templatePath => {
  const htmlWebpackPluginOptions = {};
  htmlWebpackPluginOptions.filename = templatePath.replace(/^\.\/src\/(?:index\/)?(.*).ejs$/g, '$1.html');

  if (templatePath.endsWith('index.ejs')) {
    htmlWebpackPluginOptions.inject = 'body';

    const entryKey = templatePath.replace(/\.\/src\/(?:index\/)?(.*index).ejs/g, '$1');
    htmlWebpackPluginOptions.chunks = [entryKey];

    // htmlWebpackPluginOptions.publicPath = templatePath.replace(/^\.\/src(?:\/index)?(\/.*)index.ejs$/g, '$1');
  } else {
    htmlWebpackPluginOptions.inject = false;
  }
  htmlWebpackPluginOptions.template = path.resolve(__dirname, templatePath);
  htmlWebpackPluginOptions.templateParameters = { title: 'Hiroshi Farias Saito - Software engineer' };

  return new HtmlWebpackPlugin(htmlWebpackPluginOptions);
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry,
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
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets/imgs',
          publicPath: '/assets/imgs'
        },
      },
    ],
  },
  resolve: {
    alias,
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins,
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
};