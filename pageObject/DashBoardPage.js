class DashBoardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.productsText = page.locator(".card-body b");
        this.cart =  page.locator("[routerlink*='cart']");
      

    }

    async searchProductAndAddToCart (productName){
        const titles= await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for(let i =0; i < count; ++i)
        {
            if(await this.products.nth(i).locator("b").textContent() === productName)
            {
                await this.products.nth(i).locator("text= Add To Cart").click();
                console.log("Product added to cart >>> Successful");
                break;
            }
        }
        console.log("Product Search >>> Successful");
    }


    async goToCartPage(){
        await this.cart.click();
        console.log("click Cart >>> Successful");
    }
}

module.exports = {DashBoardPage};