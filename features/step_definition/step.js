const {When, Then, Given} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const {LoginPage} = require('../../pageObject/LoginPage');
const {DashBoardPage} = require('../../pageObject/DashBoardPage');
const {CartPage} = require('../../pageObject/CartPage');

Given('I am on the login page', async function() {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigateToLoginPage();
});

When('I enter valid username and password and click on login button', async function() {
    const username = "valid_username";
    const password = "valid_password";
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.validateLogin(username, password);
    await this.loginPage.signInBtn();
});         

Then('I should be redirected to the dashboard page', async function() {
    this.dashboardPage = new DashBoardPage(this.page);
    await this.dashboardPage.verifyDashboardPage();
});