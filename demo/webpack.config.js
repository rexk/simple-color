var path = require('path');

module.exports = {
  context : path.join(__dirname),

  entry: {
    bundle: './entry.js'
  },

  output: {
    path: path.join(__dirname),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6.js']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/i,
      loader: 'babel'
    }, {
      test: /.json$/,
      loader: 'json-loader'
    }]
  },

  devServer: {
    proxy: {
      '*': {
        secure: false,
        target: 'http://localhost:8080',
        bypass: function(req, res, proxyOptions) {
          return /\.(js|json)$/.test(req.url);
        },
      }
    }
  }
};
