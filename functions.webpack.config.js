// const path = require('path')
// const Dotenv = require('dotenv-webpack')

module.exports = {
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.graphql']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [{ loader: 'graphql-import-loader' }]
      }
    ]
  }
}