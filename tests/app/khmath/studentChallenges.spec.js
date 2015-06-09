/**
 * Created by tuanh on 6/8/2015.
 */

describe('Student Challenges', function () {
    var StudentChallengesPage = requirePage('app/khmath/studentChallengesPage'),
        LoginHelper = requireHelper('app/khmath/LoginHelper');
    studentChallengesPage = new StudentChallengesPage();


    beforeEach(function (done) {

        loginHelper = new LoginHelper(browser, done)
        loginHelper.login();

    });

  /*  it('should XP counter works', function (done) {
        expect(studentChallengesPage.getXPCounter()).toBeGreaterThan(0);
        done();
    });

    it('should Star counter works', function (done) {
        expect(studentChallengesPage.getStarCounter()).toBeGreaterThan(0);
        done();
    });*/

    it('SAMPLE TEST', function (done) {

        //expect(studentChallengesPage.getTopicTitle(1).getText()).toBe('9999');
        expect(studentChallengesPage.getTopicTitleByName('UNIT 2 - Proportional Reasoning  ').getText()).toBe('9999');

        /* foo = element.all(by.css('div.challengeContainer')).all((by.css('div.panel-heading')))

         expect(foo.get(0).getText()).toBe('9999');
 */
//        foo =  element.all(by.css('div.challengeContainer')).all((by.css('div.panel-heading'))).then(function(items){
//            expect(items[0].getText()).toBe('9999');
//            expect(items.length).toBe('777');
//           /* for (var i = 0; i < items.length; ++i){
//                //expect(items[i].getText()).toBe('9999');
//               *//* if(items[i].getText() == '5'){
//                    items[i].element(by.css('div.topicTitle')).click();
//                    expect(items[i].getText()).toBe('9999');
//                    break;
//                }*//*
//            }*/
//
//             /*bar =  element.all(by.css('div.challengeContainer')).all((by.css('div.panel-collapse'))).then(function(items){
//                //expect(items[5].getText()).toBe('888');
//                expect(items[5].element(by.cssContainingText('div.topic-block-wrapper','1')).getText()).toBe('888');
//                items[5].element(by.css('a.topic-block')).click();
//
//            });
//*/
//
//
//        });

        //expect( element(by.cssContainingText('button.btn', 'Continue to Question')).getText()).toBe('Continue to Question');
        //element(by.cssContainingText('button.btn', 'Continue to Question')).click();



        done();
    });



});