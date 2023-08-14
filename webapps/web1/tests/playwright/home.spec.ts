import { expect, test } from '@playwright/test';

test('home page has the the proper title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Home');
});
