const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const DIST = path.resolve(__dirname, 'dist')
const ENTRY = ['babel-polyfill', path.resolve(__dirname, './src/entry/index.js')]

const webpackConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST,
    compress: true,
    overlay: true,
    hot: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    historyApiFallback: true
  },
  entry: ENTRY,
  output: {
    path: DIST,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/entry/index.html'),
      filename: path.resolve(__dirname, './dist/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = webpackConfig
