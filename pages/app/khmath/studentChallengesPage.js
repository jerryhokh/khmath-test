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

    self.getTopicTitleByIndex = function(index){
        return element.all(by.css('div.challengeContainer')).all((by.css('div.panel-heading'))).get(index).element(by.css('div.topicTitle'));
    }

    self.getTopicTitleByName = function(name){
       // return element.all(by.css('div.challengeContainer')).all((by.css('div.panel-heading'))).get(index).element(by.css('div.topicTitle'));
        elem = '';
        element.all(by.css('div.challengeContainer')).all((by.css('div.panel-heading'))).each(function(e, index) {
            // Will print 0 First, 1 Second, 2 Third.
            e.getText().then(function (text) {
                if(text == name){
                    elem =  e.element(by.css('div.topicTitle'));
                }
            });
        });

        return elem;
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