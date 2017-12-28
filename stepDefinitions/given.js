const defineSupportCode = require('cucumber').defineSupportCode;

var login = require(process.cwd() + '/pages/login.js');
//const driver = require('webdriverio');

defineSupportCode(function({Given}){
    Given(
        /^The DIT URL open it on the chrome browser$/,
        login.openBrowser
    );
});