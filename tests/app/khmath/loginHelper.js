var LoginHelper = function (browser, done) {
    var self = this;

    self.browser = browser;

    self.login = function(){
        self.browser.ignoreSynchronization = true;
        self.browser.driver.get('https://alpha.khmath.com/App#/Login').then(function() {
            self.browser.driver.manage().window().maximize();
            self.browser.driver.wait(function () {
                return self.browser.driver.isElementPresent(by.name('username'));
            }, 150000);
            self.browser.driver.findElement(by.name('username')).sendKeys('Angelo');
            self.browser.driver.findElement(by.name('password')).sendKeys('abcd');

            self.browser.driver.findElement(by.id('btnLogin')).click().then(function() {
                self.browser.driver.wait(function () {
                   return self.browser.driver.isElementPresent(by.css('div.counterBlockXp a span'));
                }, 150000);
                self.browser.ignoreSynchronization = false;
                done();
            });
        });
    }
};

module.exports = LoginHelper;