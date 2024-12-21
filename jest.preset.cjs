const nxPreset = require("@nx/jest/preset").default;

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: ["json", "text", "lcovonly", "html", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    "**/*": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  errorOnDeprecated: true,
  slowTestThreshold: 5,
  testEnvironment: "node"
};
