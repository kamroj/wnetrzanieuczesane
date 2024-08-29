const TerserPlugin = require('terser-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = function override(config, env) {
  if (env === 'production') {
    // Disable source maps
    config.devtool = false;

    // Configure TerserPlugin
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          mangle: true,
          keep_fnames: false,
        },
      }),
    ];

    // Add JavaScriptObfuscator plugin
    config.plugins.push(
      new JavaScriptObfuscator({
        rotateUnicodeArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.8,
      }, ['excluded_bundle_name.js'])
    );
  }

  return config;
};