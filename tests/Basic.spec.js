const test = require('@playwright/test');
const { expect } = require('@playwright/test');

// test('First test', async ({ page }) => {
//     await page.goto('https://www.google.com/');
//     console.log('Title of the page is: ' + await page.title());

// });

// test('login test', async ({ page }) => {
//     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
//     console.log('Title of the page is: ' + await page.title());

//     await page.locator('#username').fill('rahulshettyacademy');
//     await page.locator('#password').fill('Learning@830$3mK2'); 

//     const dropdown = page.locator('select.form-control');
//     await dropdown.selectOption('Teacher');


//     await page.locator('#signInBtn').click();

//     const productText = await page.locator('.card-body a').nth(0).textContent();
//     console.log(productText);

// });

test('child window test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("a[href*='documents-request']");
    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        documentLink.click(),
    ]);
    const text = await newPage.locator('.red').textContent();
    console.log(text);

    const arrayText = text.split('@');
    const domain = arrayText[1].split(' ')[0];
    console.log(domain);
    
});