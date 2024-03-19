import { test, expect } from '@playwright/test';

const UNO_USERNAME = process.env.UNO_USERNAME || "null";
const UNO_PASSWORD = process.env.UNO_PASSWORD || "null";

test.describe('UnoVarRPG - Farm', () => {

test('Farmer', async ({ page }) => {
  test.slow();
  await test.step('Log in', async () => {

    await page.goto('https://www.unovarpg.com/');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByPlaceholder('Username or email').click();
    await page.getByPlaceholder('Username or email').fill(UNO_USERNAME);
    await page.getByPlaceholder('Username or email').press('Tab');
    await page.getByPlaceholder('Password').fill(UNO_PASSWORD);
    await page.getByRole('button', { name: 'Log in' }).click();
    expect(page.getByRole('link', { name: 'Live Battle Arena!' })).toBeVisible({ timeout: 80000 });
  });

  await test.step('Get into battle', async () => {

    await page.goto('https://www.unovarpg.com/battle.php', { timeout: 30000 })
    expect(page.getByRole('checkbox')).toBeVisible({ timeout: 30000 })
    await page.getByRole('checkbox').click();
  
    });

  await test.step('Wait', async () => {
    
    await page.waitForTimeout(30000);

    });
  await test.step('Retry', async () => {
    
      test.fail()
  
    });
  
  });
  
});
