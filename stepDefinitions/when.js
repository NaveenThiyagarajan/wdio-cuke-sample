const defineSupportCode = require('cucumber').defineSupportCode;
var assert = require('assert');
var login = require(process.cwd() + '/pages/login.js');

defineSupportCode(function({When}){
    When(
        /^All the login options are loaded$/,
        function(){
            console.log("Checking the links on the login page");
            var isThere = login.checkLinks();
            login.verifyLoginPage();
            console.log("From definition: Value of isThere: " + isThere);
            assert(isThere);
        }
    );
});