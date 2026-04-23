Feature: Validate Login

Scenario: Login with valid credentials
    Given I am on the login page
    When I enter valid username and password and click on login button
    Then I should be redirected to the dashboard page