import {test as base, expect } from "@playwright/test";
import { KpHomePage } from "../pages/KpHomePage";
import { KpLoginPage } from "../pages/Kploginpage";

export const test = base.extend({

    login:async({page},use)=>{
        await use(new KpLoginPage(page));
    },

    homePage:async({page},use)=>{
        await use(new KpHomePage(page));
    },
})
export {expect};