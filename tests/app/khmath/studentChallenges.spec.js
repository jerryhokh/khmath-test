/**
 * Created by tuanh on 6/8/2015.
 */

describe('Student Challenges', function () {
    var StudentChallengesPage = requirePage('app/khmath/studentChallengesPage');
    studentChallengesPage = new StudentChallengesPage();

    beforeEach(function (done) {
        browser.ignoreSynchronization = true;
        browser.driver.get('https://alpha.khmath.com/App#/Login').then(function() {
            browser.driver.manage().window().maximize();
            browser.driver.wait(function () {
                return browser.driver.isElementPresent(by.name('username'));
            }, 150000);
            browser.driver.findElement(by.name('username')).sendKeys('Angelo');
            browser.driver.findElement(by.name('password')).sendKeys('abcd');

            browser.driver.findElement(by.id('btnLogin')).click().then(function() {
                browser.driver.wait(function () {
                    // return browser.driver.isElementPresent(by.css('div.content-container div.pageHeading'));
                    return browser.driver.isElementPresent(by.css('div.counterBlockXp a span'));
                }, 150000);
                browser.ignoreSynchronization = false;
                done();
            });
        });

    });

    it('should XP counter works', function (done) {
        expect(studentChallengesPage.getXPCounter()).toBeGreaterThan(0);
        done();
    });

    it('should Star counter works', function (done) {
        expect(studentChallengesPage.getStarCounter()).toBeGreaterThan(0);
        done();
    });

});