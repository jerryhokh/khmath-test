var BasePage = requirePage('common/basePage');
var GamePlayPage = function (url) {
    var self = this;

    self.url = url || '#/Student/0140deb7-2345-e411-80d1-00155d84469d/Gameplay/b48e7ccf-2118-4927-a6fb-5e1153f8e0a1';
    self.clickContinueToQuestion = element(by.cssContainingText('button.btn', 'Continue to Question')).click();
};

GamePlayPage.prototype = new BasePage();
GamePlayPage.prototype.goTo = function () {
    BasePage.prototype.goTo(this.url);
};

GamePlayPage.prototype.at = function () {
    return BasePage.prototype.at(this.url);
};

module.exports = GamePlayPage;