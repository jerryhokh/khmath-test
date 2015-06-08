var BasePage = function () {
};

BasePage.prototype.goTo = function (url) {
    browser.driver.getCurrentUrl().then(function (currentUrl) {
        if (currentUrl === 'data:,' || currentUrl.indexOf(url) === -1) {
            // None actual page OR at another page
            browser.driver.get(getBaseUrl() + url);
        }
    });
};

BasePage.prototype.at = function (url) {
    var q = require('q');
    var defer = q.defer();
    var baseUrl = getBaseUrl();
    var fullUrl = url.indexOf(baseUrl) === -1 ? getBaseUrl() + url : url;
    browser.driver.getCurrentUrl().then(function (currentUrl) {
        defer.resolve(currentUrl === fullUrl);
    });
    return defer.promise;
};

module.exports = BasePage;
