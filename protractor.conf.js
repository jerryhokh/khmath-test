exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 30000,

    //specs: [
    //  '*.js'
    //],

    capabilities: {
        'browserName': 'chrome'
    },
    
    onPrepare: function () {
        requirePage = function (name) {
            return require(__dirname + "/pages/" + name);
        };
        requireHelper = function (name) {
            return require(__dirname + "/tests/" + name);
        };
        requireLib = function (name) {
            return require(__dirname + "/lib/" + name);
        };
        getBaseUrl = function () {
            return 'https://alpha.khmath.com/App';
        };
    },

    suites: {
        login: 'tests/app/khmath/login.spec.js',
        challenges: 'tests/app/khmath/*spec.js'
    },


    baseUrl: 'https://alpha.khmath.com/App',

    framework: 'jasmine',
    
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    restartBrowserBetweenTests: true
};
