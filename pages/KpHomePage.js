import { expect } from "@playwright/test";

export class KpHomePage {

    constructor(page) {
        this.page = page;

        // Homepage locators
        this.myhome = page.getByRole('heading', { name: 'My Home' });

        this.nameHeading = page.getByText("Abhijith");

        // My Account
        this.myAccount = page.getByText("My Account");

        this.myPropertyText = page.getByText("My Properties");

    }

    // Verify My Home
    async verifyMyHome() {
        await expect(this.myhome).toBeVisible();
        await expect(this.myhome).toHaveText("My Home");
    }

    // Verify username
    async verifyName() {
        await expect(this.nameHeading).toHaveText("Abhijith");
    }

    // Click My Account
    async myAccountClick() {
        await this.myAccount.click();
    }

    // Verify My Properties
    async verifyMyProperties() {
        await expect(this.myPropertyText).toBeVisible();
        await expect(this.myPropertyText).toHaveText("My Properties");
    }

}
