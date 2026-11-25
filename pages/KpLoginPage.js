export class KpLoginPage
{

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page)
    {
        this.page=page;
        this.usernamefield = page.locator("#ulogin");
        this.passwordfield = page.locator("#upass");
        this.loginbutton = page.locator("#sub_logbtn");
        this.logo = page.getByAltText("Kerala Property");
    }

    async setValues(uname,upass)
    {
        await this.usernamefield.fill(uname);
        await this.passwordfield.fill(upass);
    }

    async buttonClick()
    {
        await this.loginbutton.click();
    }

    async logoClick()
    {
        await this.logoClick();
    }
}