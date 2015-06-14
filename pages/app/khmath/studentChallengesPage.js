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
    };

    self.getStarCounter = function(){

        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.css('div.counterBlockStars a span'));
        }, 10000);

        return element(by.css('div.counterBlockStars a span')).getText();
    };

    self.clickTopicActivity = function(topicName, activityNumber){
        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.css('div.topicTitle'));
        }, 10000);
        //click on topic title
       element.all(by.css('div.challengeContainer'))
            .all((by.css('div.panel-heading')))
            .all(by.cssContainingText('div.topicTitle',topicName)).click();

        //select activity
        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.css('div.topic-block-label'));
        }, 10000);

       element.all(by.css('div.panel-group div.sectionPanel'))
            .all((by.css('div.panel-collapse')))
            .all(by.cssContainingText('div.topic-block-label', 1)).filter(function(elem, index) {
               return elem.getText().then(function(text) {
                   return text !== '';
               });
           }).then(function(filteredElements) {
               if(filteredElements.length > 0){
                   filteredElements[0].click();
               }

           });

        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.css('div.modalHeading'));
        }, 10000);

        //element(by.cssContainingText('button.btn', 'Continue to Question')).getText().toBe('debuging');
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