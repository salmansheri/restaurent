import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/menu');
	await expect(page.getByRole('heading')).toBeVisible();
});
