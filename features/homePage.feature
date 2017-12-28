Feature: Veriry the timeline page of e app

@e_Login
Scenario: Timeline page on the app
    Given The DIT URL open it on the chrome browser
    When All the login options are loaded
    Then I use the Google to login
    And I validate the home page is loaded
    And I click on the timeline icon
    And I verify no future message is displayed