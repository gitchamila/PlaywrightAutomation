const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pageObject/LoginPage');
const {DashBoardPage} = require('../pageObject/DashBoardPage');
const {CartPage} = require('../pageObject/CartPage');


test('Client app login', async ({ page }) => {
    const username = "anshika@gmail.com";   
    const password = "Iamking@000";
    const productName = "ADIDAS ORIGINAL";

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.validateLogin(username, password);
    


    const dashboardPage = new DashBoardPage(page);
    await dashboardPage.searchProductAndAddToCart(productName);
    await dashboardPage.goToCartPage();


    const cartPage = new CartPage(page);
    await cartPage.verifyProductInCart(productName);  
    await cartPage.Checkout();  
   

});