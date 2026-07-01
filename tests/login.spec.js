const{test, expect} = require('@playwright/test');

test('Open ORANGEHRM Website', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await expect(page).toHaveTitle('OrangeHRM');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator('.oxd-main-menu-item.active').click();
    await page.locator(".oxd-userdropdown-name").click();
    await page.locator("//a[normalize-space()='Logout']").click();

    // await page.getByRole('textbox', { name: 'Username' }).click();
    // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // await page.getByLocator('.oxd-main-menu-item.active').click();
    // await page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').click();
    // await page.locator('p.oxd-userdropdown-name').click();
    // await page.getByRole('menuitem', { name: 'Logout' }).click();
});