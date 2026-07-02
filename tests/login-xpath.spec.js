const { test, expect } = require('@playwright/test');

test('Open ORANGEHRM Website (login using XPath)', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@name='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();

  // Login এর পর আসল URL
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page has loaded
  console.log("After Login:", await page.url());

  await expect(page).toHaveURL(/dashboard/);
});