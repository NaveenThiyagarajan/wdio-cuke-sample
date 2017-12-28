//var browser = require('webdriverio');

module.exports.checkLinks = function(){
    var isThere;
    isThere = (browser.isExisting('div=Google+') && browser.isExisting('div=LinkedIn'));
    console.log("The value of isThere: " + isThere);
    if(isThere){
        console.log("Google+ link displayed on the UI");
    }
    else{
        console.log("There is no links on the login page");
    }
    return isThere;
};

module.exports.openBrowser = function(){
    browser.url("/m");
};

module.exports.clickGoogleToLogin = function(){
    browser.click('div=Google+');
    console.log('Google+ clicked')
    //browser.click('div=Use another account');
    console.log('Use another accunt clicked')
    browser.pause(2000)
    browser.setValue('[type="email"]', "c.vanhorn1111");
    console.log("emialID entered")
    browser.click('span=Next');
    browser.pause(2000)
    console.log("Next is clicke in emailID page")
    browser.setValue('[type="password"]','adpadp01');
    console.log("Password is sent");
    browser.click('span=Next');
    browser.pause(10000);
};

module.exports.verifyLoginPage = function(){
    var noButton = browser.elements('[class="action-button__container"]');
    console.log("Retrieve:" + noButton);
    console.log("Retrieve:" + noButton.value.length);
    console.log("Retrieve:" + noButton.value[0].ELEMENT);
    for (let index = 0; index < noButton.value.length; index++) {
        var element1 = noButton.value[index]; 
        console.log("Element "+ index + " : " + element1.ELEMENT);         
    }
};
// module.exports = {
//     openBrowser: function(){
//         browser.url("/m");
//     },
//     checkLinks: function(){
//         var isThere = false;
//         isThere = (browser.isExisting('div=Google+') && browser.isExisting('div=LinkedIn'));
//         if(isThere){
//             console.log("Google+ link displayed on the UI");
//         }
//         else{
//             console.log("The expected links are not there in the page")
//         }
//         return isThere;
//     }
// };