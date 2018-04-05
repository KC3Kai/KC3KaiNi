const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@vue': path.resolve(__dirname, '../../src/browser/components'),
      '@scss': path.resolve(__dirname, '../../src/browser/scss'),
    }
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
      }
    ]
  }
}
