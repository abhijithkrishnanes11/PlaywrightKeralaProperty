import { test, expect } from "../Fixtures/test-fixture";
/** @type {KpLoginPage} */

test.beforeEach("url loading..",async({page})=>{
   await page.goto(process.env.BASEURL);
})

test("invalid login test",async({login})=>{
    await login.setValues("admin@gmail.com","admin@123");
    await login.buttonClick();
})

test("check if the logo is visible",async(login)=>{
    await expect(login.logo).toBeVisible();
})

test("checking url after clicking",async({page,login})=>{

    await login.logoClick();
    await expect(page).toHaveURL("https://keralaproperty.in");
})
