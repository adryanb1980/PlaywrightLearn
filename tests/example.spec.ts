import { test, expect } from '@playwright/test';

test('Adi', async ({ page }, testInfo) => {
  test.setTimeout(120000);

  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("DEMOQA");
  const screenshotprojects = await page.screenshot();
  await testInfo.attach('screenshotprojects', { body: screenshotprojects, contentType: 'image/png' });


  await page.close(); 
});
