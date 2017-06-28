const path = require('path')
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: {
    app: [
      './src/index.jsx'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'js/bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
       test: /(globalStyles\.css)$/,
       use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader'
          }],
          use: [{
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader'
          }]
        })
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml?&name=images/[name].[ext]"
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        include: [path.resolve(__dirname, 'src', 'components')],
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader'
          }],
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }]
        })
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
            ],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread'
            ]
          }
        }]
      },
      {
        test: /react-icons\/(.)*(.js)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
       test: /\.(jpe?g|gif|png)$/,
       loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('./[name].css')
  ],

  devServer: {
    inline: true,
    port: 3000,
    hot: true
  }
}
