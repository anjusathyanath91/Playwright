import { test, expect } from '@playwright/test';

test('Test Autocomplete Dropdown', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/autocomplete');

  const countryInput = page.locator('#country');
  await expect(countryInput).toBeVisible();

  await countryInput.fill('Uni');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  await expect(countryInput).toHaveValue(/United/i, { timeout: 10000 });

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#result')).toContainText(/United/i, { timeout: 10000 });
});