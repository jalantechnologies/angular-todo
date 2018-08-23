const webpack = require('webpack');
const config = require('config');

const CONFIG = config.has('public') ? config.get('public') : {};

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      CONFIG,
    }),
  ],
};
