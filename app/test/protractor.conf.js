exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },

 

  framework: 'jasmine',
    directConnect: true,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};