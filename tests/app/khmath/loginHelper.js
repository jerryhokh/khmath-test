var LoginHelper = function (browser, done) {
    var self = this;
    self.browser = browser;
    var _username="Angelo",
        _password = "abcd";
    self.login = function(username, password){
        _username = username?username:_username;
        _password = password?password:_password;

        self.browser.ignoreSynchronization = true;
        self.browser.driver.get(getBaseUrl() + '#/Login').then(function() {
            self.browser.driver.manage().window().maximize();
            self.browser.driver.wait(function () {
                return self.browser.driver.isElementPresent(by.name('username'));
            }, 150000);
            self.browser.driver.findElement(by.name('username')).sendKeys(_username);
            self.browser.driver.findElement(by.name('password')).sendKeys(_password);

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