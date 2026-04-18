import {expect, test} from '@playwright/test'


test('Browser playwright test', async ({ browser })=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.Gmail.com/")
    console.log(await page.title());
    //css
    await page.locator('#identifierId').fill('nithinreddy1781@gmail.com')
    await page.locator("xpath=//*[contains(text(), 'Next')]").click();
    await page.locator('[type="password"]').fill('nithinreddy770');
    await page.locator("xpath=//*[contains(text(), 'Next')]").click();

});

test('Page playwright test', async ({ page })=> {

    await page.goto("https://www.Google.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    await page.locator('#identifierId').fill('nithinreddy1781@gmail.com')
    await page.locator("xpath=//*[contains(text(), 'Next')]").click();
    await page.locator('[type="password"]').fill('nithinreddy770');
    await page.locator("xpath=//*[contains(text(), 'Next')]").click();

});