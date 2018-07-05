exports.config = {
    // angular: false,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    // maxInstances: 3 ,
    // maxSessions: 3,
    allScriptsTimeout:30000000,
    defaultTimeoutInterval: 400000,

    onPrepare: function () {
        browser.driver.manage().window().setSize(1680, 1050);
    },
}