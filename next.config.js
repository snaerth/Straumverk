// next.config.js
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const registerEnvFile = require('./utils/envVars');

const localEnv = registerEnvFile(false);
const definePluginProps = {};

Object.keys(localEnv).forEach(key => {
  const keyName = `process.env.${key}`;
  definePluginProps[keyName] = localEnv[key];
});

module.exports = withCSS({
  cssModules: true,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack(config, options) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(localEnv),
      new webpack.DefinePlugin(definePluginProps)
    );
    return config;
  },
});
