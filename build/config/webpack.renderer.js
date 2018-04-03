const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../tmp/renderer')
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
