import { test, expect } from '@playwright/test';

test('sum function in browser context', async ({ page }) => {
  await page.setContent(`
    <script type="module">
      window.result = (3 + 4).toString();
      document.title = window.result;
    </script>
  `);
  await expect(page).toHaveTitle('7');``
});
