const path = require('path');
const webpack = require('webpack');
const NodeExternals = require('webpack-node-externals');

const browser = {
  entry: [
    'whatwg-fetch', './src/index.js'
  ],
  output: {
    path: __dirname + '/dist/browser',
    filename: '[name].index.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader/locals'] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ],
  /*
  optimization: {
    splitChunks: {
    	cacheGroups: {
    		commons: {
    			name: "commons",
    			chunks: "initial",
    			minChunks: 2
    		}
    	}
    }
  } */
};

const server = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [NodeExternals()],
  output: {
    path: __dirname + '/dist/server',
    filename: 'server.index.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browser, server]
