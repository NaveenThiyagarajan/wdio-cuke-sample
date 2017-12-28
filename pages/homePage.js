module.exports.verifyAppLoaded = function(){
    var isThere = browser.isExisting("//nav/ul/li");
    console.log("Is Present: " + isThere);
    if(isThere){
        var navElements = browser.elements("//nav/ul/li");
        console.log("The number of navigation buttons: " + navElements.value.length);
        console.log("App is loaded");
        
    }
    else{
        console.log("App FAILED to load");
    }
    browser.pause(5000);
    return isThere;
};

module.exports.clickTimeline = function(){
    browser.click("//nav/ul/li[3]");
};

module.exports.verifyFutureText = function(){
    browser.pause(2000);
    var onUI = browser.getText('[class="timeline-item timeline-item-last"]');
    if(onUI == 'No tasks or future events'){
        return true;
    }
    else{
        return false;
    }
};