describe('Jerry testing', function () {
    var LoginPage = requirePage('app/khmath/loginPage'),
        LoginHelper = requireHelper('app/khmath/loginHelper');

    var loginPage, loginHelper;



    beforeEach(function (done) {
        loginHelper = new LoginHelper(browser, done);
        loginHelper.login();
    });

   /* it('should login OK', function (done) {

        expect(element(by.css('div.content-container div.pageHeading')).getText()).toEqual('Challenges');

        done();
    });*/
});