const {test, expect} = require('@playwright/test');

class CartPage{
    constructor(page){
        this.page = page;
        this.cartItems = page.locator("div li").first();
        this.checkout = page.locator("text=Checkout");

    }

    async verifyProductInCart(productName){
        await this.cartItems.waitFor();
        const item = await this.page.locator("h3:has-text('"+productName+"')");
        const bool = await item.isVisible();
        expect(bool).toBeTruthy();
        console.log("Product in Cart >>> Successful");
    }

    async Checkout()
    {
    await this.checkout.click();
    console.log("Checkout >>> Successful");
    }
}



module.exports = {CartPage};