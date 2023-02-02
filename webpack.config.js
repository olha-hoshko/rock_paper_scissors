const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: "production",
   entry: './js/index.js',
   output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test: /\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      },
      {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env']
            }
         }
      }]
   },
   plugins: [
      new miniCss({
         filename: 'styles.css',
      }),
      new HTMLWebpackPlugin({
         template: "./index.html"
      })
   ]
};