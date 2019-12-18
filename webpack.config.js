const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|build)/,
        use: ['babel-loader']
      },
      {
        parser: {
          amd: false
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    //path: __dirname + '/dist',
    path: path.resolve('dist'),
    publicPath: '/',
    filename: "index.js",
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};