const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist/bundle'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }]
      }
    ]
  }
  
}

module.exports = config;