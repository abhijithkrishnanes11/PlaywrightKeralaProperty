import { test, expect } from "../Fixtures/test-fixture";
/** @type {KpLoginPage} */
/** @type {KpHomePage} */

// test.describe("Homepage",()=>{

    test.beforeEach("url loading..",async({page})=>{
       await page.goto("https://keralaproperty.in/member/myhome/");
    })

    test('verify my hometest',async({homePage})=>{
        await expect(homePage.myhome).toBeVisible();
        await expect(homePage.myhome).toHaveText("My Home");
    })

    test('verify your name',async({homePage})=>{
        await expect(homePage.nameHeading).toHaveText("abhijith");
    })

    test("click myacount",async({homePage})=>{
        await homePage.myAccountClick();
        await expect(homePage.myPropertyText).toHaveText("My Properties");
    })