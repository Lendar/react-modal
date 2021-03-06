module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'browserify'],

    files: [
      'specs/main.js'
    ],

    exclude: [],

    preprocessors: {
      'specs/main.js': ['browserify']
    },

    browserify: {
      transform: ['envify'],
      watch: true,
      debug: true
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    captureTimeout: 60000,

    singleRun: true
  });
};
