const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pageObject/LoginPage');
const {DashBoardPage} = require('../pageObject/DashBoardPage');
const {CartPage} = require('../pageObject/CartPage');
const testData = JSON.parse(JSON.stringify(require('../utils/PlaceOrderData.json')));


for (const data of testData) {
test.only(`Client app login for ${data.productName}`, async ({ page }) => {
    const username = data.username;
    const password = data.password;
    const productName = data.productName;

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.validateLogin(username, password);
    


    // const dashboardPage = new DashBoardPage(page);
    // await dashboardPage.searchProductAndAddToCart(productName);
    // await dashboardPage.goToCartPage();


    // const cartPage = new CartPage(page);
    // await cartPage.verifyProductInCart(productName);  
    // await cartPage.Checkout();  
   

});
}