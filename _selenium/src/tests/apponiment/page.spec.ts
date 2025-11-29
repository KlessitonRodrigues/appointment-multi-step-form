import { By } from "selenium-webdriver";

import env from "../../config/env";
import webDriver from "../../config/webDriver";
import { screenSize } from "../../utils/browserTest";

describe("When on appointment page", () => {
  test("Should render a desktop screen", async () => {
    const browser = await webDriver;
    await browser.get(env.CURRENT_URL);
    await browser.sleep(env.STEP_TIME);
    await browser.manage().window().setRect(screenSize.desktop);
    await browser.sleep(env.STEP_TIME);
  });

  test("Should fill appointment place", async () => {
    const browser = await webDriver;
    await browser.findElement(By.css("a")).click();
    await browser.sleep(env.STEP_TIME);
    await browser
      .findElement(By.css("input[name='date']"))
      .sendKeys("12/25/2025");
    await browser.findElement(By.css("input[name='time']")).sendKeys("1040A");
    await browser.findElement(By.css("button[type='submit']")).click();
    await browser.sleep(env.STEP_TIME);
    await browser.findElement(By.css("form .card")).click();
    await browser.sleep(env.STEP_TIME);
    await browser.findElement(By.css("button[type='submit']")).click();
    await browser.sleep(env.STEP_TIME);
  });

  test("Should fill appointment doctor form", async () => {
    const browser = await webDriver;
    await browser.findElement(By.css("form .card")).click();
    await browser.sleep(env.STEP_TIME);
    await browser.findElement(By.css("button[type='submit']")).click();
    await browser.sleep(env.STEP_TIME);
  });

  test("Should fill appointment payment form", async () => {
    const browser = await webDriver;
    await browser.findElement(By.css("form .card")).click();
    await browser.sleep(env.STEP_TIME);
    await browser.findElement(By.css("button[type='submit']")).click();
    await browser.sleep(env.STEP_TIME);
  });

  test("Should fill appointment confirm form", async () => {
    const browser = await webDriver;
    await browser.findElement(By.css("button[type='submit']")).click();
    await browser.sleep(env.STEP_TIME);
    await browser.findElement(By.css("a")).click();
    await browser.sleep(env.STEP_TIME);
  });

  afterAll(async () => {
    const browser = await webDriver;
    await browser.close();
  });
});
