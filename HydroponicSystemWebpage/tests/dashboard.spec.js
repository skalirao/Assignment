// tests/dashboard.spec.js
const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://127.0.0.1:8080/index.html'; // Replace with your actual URL or live-server address

test.describe('Hydroponic System Dashboard 🌱', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  // Acceptance/UI Test
  test('should load the dashboard page and display correct heading', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Welcome To Our');
    await expect(page.locator('h2')).toHaveText('Hydroponic System Dashboard🌱');
  });

  // Functional/UI Test
  test('should render 5 chart canvases', async ({ page }) => {
    const canvases = page.locator('canvas');
    await expect(canvases).toHaveCount(5);
  });

  // System Test - Chart Titles Check (Y-axis)
  test('should include proper chart titles in Y-axis', async ({ page }) => {
    await page.goto(BASE_URL);
  
    // ✅ Wait until all charts are rendered
    await page.waitForFunction(() => window.myCharts && window.myCharts.length === 5);
  
    const expectedLabels = [
      "Temperature (°C)",
      "Humidity (%)",
      "Distance",
      "Turbidity (NTU)",
      "pH Value"
    ];
  
    // Extract chart Y-axis titles
    const titles = await page.evaluate(() => {
      return window.myCharts.map(chart => chart.options.scales.y.title.text);
    });
  
    console.log('Extracted Y-axis labels:', titles);
  
    expect(titles.sort()).toEqual(expectedLabels.sort());
  });

  // Integration Test - ThingSpeak Data Loaded
  test('should fetch ThingSpeak data and plot chart data', async ({ page }) => {
    const dataPoints = await page.evaluate(() => {
      return window.myCharts.map(chart => chart.data.datasets[0].data.length);
    });

    for (let points of dataPoints) {
      expect(points).toBeGreaterThan(0);
    }
  });

  // Responsive UI Test
  test('should adjust layout on smaller screens', async ({ page }) => {
    await page.setViewportSize({ width: 480, height: 800 });
    const h2FontSize = await page.$eval('h2', el => getComputedStyle(el).fontSize);
    expect(parseFloat(h2FontSize)).toBeLessThanOrEqual(24); // Assume mobile font is small
  });

});
