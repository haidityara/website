const {
  override,
  addWebpackResolve,
} = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackResolve({
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      assets: path.resolve(__dirname, './src/assets/'),
      sections: path.resolve(__dirname, './src/sections/'),
    },
  }),
);
