// This file is named differently than its JS bootstrapper to avoid the ts compiler to overwrite it.

import path = require('path');

export function config(config) {
  config.set({
    basePath: path.join(__dirname, '..'),
    frameworks: ['jasmine'],
    plugins: [
      require("karma-chrome-launcher"),
      require("karma-jasmine"),
      require("karma-coverage"),
      require("karma-remap-istanbul")
    ],
    files: [
      {pattern: 'dist/vendor/core-js/client/core.js', included: true, watched: false},
      {pattern: 'dist/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false},
      {pattern: 'dist/vendor/systemjs/dist/system.src.js', included: true, watched: false},
      {pattern: 'dist/vendor/zone.js/dist/zone.js', included: true, watched: false},
      {pattern: 'dist/vendor/zone.js/dist/proxy.js', included: true, watched: false},
      {pattern: 'dist/vendor/zone.js/dist/sync-test.js', included: true, watched: false},
      {pattern: 'dist/vendor/zone.js/dist/jasmine-patch.js', included: true, watched: false},
      {pattern: 'dist/vendor/zone.js/dist/async-test.js', included: true, watched: false},
      {pattern: 'dist/vendor/zone.js/dist/fake-async-test.js', included: true, watched: false},

      {pattern: 'test/karma-test-shim.js', included: true, watched: false},

      // paths loaded via module imports
      {pattern: 'dist/**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'dist/**/*.html', included: false, watched: true},
      {pattern: 'dist/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'dist/**/*.ts', included: false, watched: false},
      {pattern: 'dist/**/*.js.map', included: false, watched: false}
    ],
    proxies: {},

    remapIstanbulReporter: {
      reports: {
        html: "coverage",
        lcovonly: "./coverage/coverage.lcov",
        json: "./coverage/coverage-json.json"
      }
    },

    exclude: [],
    preprocessors: {
      "dist/@slb-planck-ui/module/**/!(*spec|*d).js": ["coverage"]
    },
    reporters: ["progress", "coverage", "karma-remap-istanbul"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    browserDisconnectTimeout: 20000,
    browserNoActivityTimeout: 240000,
    captureTimeout: 120000,
    browsers: ['Chrome'],

    singleRun: false
  });
};
