const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  // output: {
  //   path: path.resolve(__dirname, 'client/dist/bundle'),
  //   filename: 'bundle.js'
  // },
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"]
    }
  }]
}

const serverConfig = {
  target: 'node',
  node: {
    __dirname: false
  },
  externals: nodeExternals(),
  entry: './client/src/server.jsx',
  module: {
    rules: [config]
  },
  output: {
    path: path.resolve(__dirname, 'client/dist/bundle'),
    filename: 'serverBundle.js',
    libraryTarget: 'commonjs2'
  }
}

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: './client/src/index.jsx',
  module: {
    rules: [config]
  },
  output: {
    path: path.resolve(__dirname, 'client/dist/bundle'),
    filename: 'bundle.js'
  }
}

module.exports = [serverConfig, clientConfig];