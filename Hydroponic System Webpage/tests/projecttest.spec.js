const { test, expect } = require('@playwright/test');

test('Hydroponic Dashboard UI loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/one.html'); 
  await expect(page.locator('h1')).toHaveText('Welcome To Our');
  await expect(page.locator('h2')).toHaveText('Hydroponic System Dashboard🌱');

  for (let i = 1; i <= 5; i++) {
    await expect(page.locator(`#chart${i}`)).toBeVisible();
  }
});
test('Charts are visible and rendered with size', async ({ page }) => {
  await page.goto('http://localhost:3000/one.html');

  for (let i = 1; i <= 5; i++) {
    const chart = page.locator(`#chart${i}`);
    await expect(chart).toBeVisible();

    const box = await chart.boundingBox();
    expect(box?.width).toBeGreaterThan(100); 
    expect(box?.height).toBeGreaterThan(100);
  }
});
test('Chart.js is loaded', async ({ page }) => {
  await page.goto('http://localhost:3000/one.html');

  const isChartLoaded = await page.evaluate(() => {
    return typeof Chart === 'function';
  });

  expect(isChartLoaded).toBe(true);
});

test('Chart updates dynamically via script', async ({ page }) => {
  await page.goto('http://localhost:3000/one.html');

  const chartCount = await page.waitForFunction(() => {
    return window.myCharts && window.myCharts.length >= 5;
  }, { timeout: 15000 });

  expect(await chartCount.jsonValue()).toBeTruthy(); 
});

test('UI has not visually changed', async ({ page }) => {
  await page.goto('http://localhost:3000/one.html');
  await page.screenshot({ path: 'dashboard.png', fullPage: true });

  expect(await page.screenshot()).toMatchSnapshot('dashboard-snapshot.png', { threshold: 0.2 });
});
