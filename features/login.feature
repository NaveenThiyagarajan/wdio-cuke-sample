Feature: Veriry the Login functionality of e app

@e_Login
Scenario: Logging in to the app
    Given The DIT URL open it on the chrome browser
    When All the login options are loaded
    Then I use the Google to login
    And I validate the home page is loaded


# "generateReport":"./node_modules/cucumber-html-reporter/index.js -f summary -f json:reports/json/*.json"