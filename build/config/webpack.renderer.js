const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@vue': path.resolve(__dirname, '../../src/browser/components'),
      '@img': path.resolve(__dirname, '../../src/browser/img'),
      '@themes': path.resolve(__dirname, '../../src/themes'),
      '@KC3': path.resolve(__dirname, '../../src/kc3'),
      '@schema': path.resolve(__dirname, '../../src/schema'),
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
