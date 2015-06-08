var BasePage = requirePage('common/basePage');
var StudentChallengesPage = function (url) {
    var self = this,
        q = require('q');

    self.url = url || '#/Student/0140deb7-2345-e411-80d1-00155d84469d/Challenges';


    self.getXPCounter = function(){

        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.css('div.counterBlockXp a span'));
        }, 10000);

        return element(by.css('div.counterBlockXp a span')).getText();
    }

    self.getStarCounter = function(){

        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.css('div.counterBlockStars a span'));
        }, 10000);

        return element(by.css('div.counterBlockStars a span')).getText();
    }
};

StudentChallengesPage.prototype = new BasePage();
StudentChallengesPage.prototype.goTo = function () {
    BasePage.prototype.goTo(this.url);
};

StudentChallengesPage.prototype.at = function () {
    return BasePage.prototype.at(this.url);
};

module.exports = StudentChallengesPage;