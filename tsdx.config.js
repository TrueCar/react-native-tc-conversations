const images = require("@rollup/plugin-image");

module.exports = {
  rollup(config) {
    config.plugins = [
      images({ incude: ["**/*.png", "**/*.jpg"] }),
      ...config.plugins,
    ];

    return config;
  },
};
