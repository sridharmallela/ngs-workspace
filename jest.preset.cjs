const { default: nxPreset } = require('@nx/jest/preset');
const { default: myPreset } = require('jest-preset-smallela');

module.exports = {
  ...nxPreset,
  ...myPreset
};
