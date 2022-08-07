const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');

const entry = glob.sync('./src/*/index.ts').reduce((entries, entry) => {
  const entryKey = entry.replace(/\.\/src\/(?:index\/)?(.*index).ts/g, '$1');
  entries[entryKey] = entry;
  return entries;
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
  htmlWebpackPluginOptions.templateParameters = { title: 'Template' };

  console.log(templatePath);
  console.log(JSON.stringify(htmlWebpackPluginOptions, null, 2));

  return new HtmlWebpackPlugin(htmlWebpackPluginOptions);
});

console.log(JSON.stringify(entry, null, 2));

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
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets/imgs',
          publicPath: 'assets/imgs'
        },
      },
    ],
  },
  resolve: {
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