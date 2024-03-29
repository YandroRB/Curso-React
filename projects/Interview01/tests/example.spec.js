import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL="http://localhost:5173/"
const CAT_IMAGE_URL="https://cataas.com";

test ('basic test for random facts', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text= await page.getByRole('paragraph');
  const image= await page.getByRole('img');

  const textContent= await text.textContent();
  const imgSrc= await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imgSrc?.startsWith(CAT_IMAGE_URL)).toBeTruthy();
});
