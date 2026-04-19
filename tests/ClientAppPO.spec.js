const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pageObject/LoginPage');
const {DashBoardPage} = require('../pageObject/DashBoardPage');


test('Client app login', async ({ page }) => {
    const email = "anshika@gmail.com";   
    const password = "Iamking@000";
    const productName = "ADIDAS ORIGINAL";

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.validateLogin(email, password);

    await page.waitForLoadState('networkidle');

    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.searchProduct(productName);
    await dashboardPage.goToOrdersPage();

});