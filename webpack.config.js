const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.ts',

  mode: 'development',

  resolve: {
    extensions: ['.ts', '.js']
  },

  devServer: {
    host: 'fang.dev.io'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
