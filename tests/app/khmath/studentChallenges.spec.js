/**
 * Created by tuanh on 6/8/2015.
 */

describe('Student Challenges', function () {
    var StudentChallengesPage = requirePage('app/khmath/studentChallengesPage'),
        GamePlayPage = requirePage('app/khmath/gamePlayPage'),
        LoginHelper = requireHelper('app/khmath/LoginHelper');
    studentChallengesPage = new StudentChallengesPage();
    gamePlayPage = new GamePlayPage();


    beforeEach(function (done) {

        loginHelper = new LoginHelper(browser, done)
        loginHelper.login();

    });

    it('should XP counter works', function (done) {
        expect(studentChallengesPage.getXPCounter()).toBeGreaterThan(0);
        done();
    });

    it('should Star counter works', function (done) {
        expect(studentChallengesPage.getStarCounter()).toBeGreaterThan(0);
        done();
    });

    it('Should show correct modal if selected correct answer', function (done) {

        studentChallengesPage.clickTopicActivity('Linear Relationships',1);
        gamePlayPage.clickContinueToQuestion.click();

        //NOT DONE YET due to slow network today. it takes like 40secs to get to the login page.

        //expect( element(by.cssContainingText('button.btn', 'Continue to Question')).getText()).toBe('Continue to Question');
        //element(by.cssContainingText('button.btn', 'Continue to Question')).click();



        done();
    });



});