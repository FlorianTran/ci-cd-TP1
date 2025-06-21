import { test, expect } from '@playwright/test';
import { sum } from '../index.js';

test('sum function in browser context', async ({ page }) => {
  const result = sum(3, 4);
  await page.setContent(`
    <script type="module">
      window.result = '${result}';
      document.title = window.result;
    </script>
  `);
  await expect(page).toHaveTitle('7');
});
