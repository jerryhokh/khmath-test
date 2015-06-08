var BasePage = requirePage('common/basePage');
var LoginPage = function (url) {
    var self = this,
        q = require('q');

    self.url = url || '##/Login';
    self.txtUsername =  element(by.model('loginData.Username'));
    self.txtPassword = element(by.model('loginData.Password'));
    self.btnLogin = element(by.id('btnLogin'));

    self.setUsername = function(username){
        browser.driver.wait(function () {
            return self.txtUsername.isDisplayed();
        }, 20000);
        self.txtUsername.sendKeys(username);
    }

    self.setPassword = function(password){
        browser.driver.wait(function () {
            return self.txtPassword.isDisplayed();
        }, 20000);
        self.txtPassword.sendKeys(password);
    }

    self.clickLogin = function(){
        self.btnLogin.click();
    }


};

LoginPage.prototype = new BasePage();
LoginPage.prototype.goTo = function () {
    BasePage.prototype.goTo(this.url);
};

LoginPage.prototype.at = function () {
    return BasePage.prototype.at(this.url);
};

module.exports = LoginPage;