var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/json/cucumber_report.json',
        output: 'reports/html/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true
    };
 
    reporter.generate(options);