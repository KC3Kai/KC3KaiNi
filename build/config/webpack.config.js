const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE = process.env.NODE_ENV || 'development'

module.exports = {
  mode: MODE,
  entry: './src/index.js',
  output: {
    filename: 'priconne-planner.js',
    path: path.resolve(__dirname, 'docs')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@src': path.resolve(__dirname, './src'),
      '@equip': path.resolve(__dirname, './src/img/equip'),
      '@map': path.resolve(__dirname, './src/img/map'),
      '@unit': path.resolve(__dirname, './src/img/unit'),
      '@scss': path.resolve(__dirname, './src/scss'),
      '@data': path.resolve(__dirname, './src/data'),
      '@vue': path.resolve(__dirname, './src/components'),
    }
  },
  devServer: {
    contentBase: './docs',
    hot: true
  },
  module: {
    rules: [
      { // Babel JS
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
            plugins: [ 'syntax-dynamic-import' ]
          }
        },
        exclude: /(node_modules|bower_components)/
      },
      { // Global Styles
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        include: [ path.resolve(__dirname, './src/scss') ]
      },
      { // Images
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: './src'
            }
          }
        ]
      },
      { // Vue Components
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./docs']),
    new HtmlWebpackPlugin({}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
