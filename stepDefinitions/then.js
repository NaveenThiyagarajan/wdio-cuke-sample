const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
var login = require(process.cwd() + '/pages/login.js');
var homePage = require(process.cwd() + '/pages/homePage.js');

defineSupportCode(function({Then}){
    Then(
        /^I use the Google to login$/,
        login.clickGoogleToLogin
    );
    Then(
        /^I validate the home page is loaded$/,
        function(){
            var value = homePage.verifyAppLoaded();
            assert(value);
        }
    );
    Then(
        /^I click on the timeline icon$/,
        homePage.clickTimeline
    );
    Then(
        /^I verify no future message is displayed$/,
        function(){
            var value = homePage.verifyFutureText();
            assert(value);
        }
    );
});