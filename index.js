//   ---------------- Working Code with multi Tabs -----------------
const puppeteer = require('puppeteer');

getReward()
  .then(() => console.log('Done'))
  .catch((error) => console.log(error));

async function getReward() {
  const browser = await puppeteer.launch({
    headless: false,
    // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    // args: [
    //   '--user-data-dir=C:\\Users\\Priti\\AppData\\Local\\Chrome\\User Data',
    //   '--profile-directory=Person 1',
    //   '--profile-directory=C:\\Users\\Priti\\AppData\\Local\\GoogleChrome\\User Data\\Default',
    // ],
  });

  for (let i = 1; i <= 65; i++) {
    const page = await browser.newPage();
    const pages = await browser.pages();
    // await page.setViewport({ width: 300, height: 720 });
    await page.goto('https://bing.com');

    await page.evaluate(() => {
      let k = 1;
      let d = `javaScript ${k}`;
      document.querySelector('input[name="q"]').value = d;
    });
    // await page.keyboard.press('Enter');

    // Click on the "Bing Search" button and wait for the page to load
    const waitForLoad = new Promise((resolve) => page.on('load', () => resolve()));
    await page.evaluate(() => {
      document.querySelector('input[name="search"]').click();
    });
    await waitForLoad;
    pages[0].close();
  }
  const page = await browser.newPage();
  const pages = await browser.pages();
  await page.goto('https://bing.com');
}
// ------------------------------------------------------------------

//   for (let i = 1; i <= 10; i++) {
//     const page = await browser.newPage();
//     await page.goto('https://bing.com');

//     await page.evaluate((i) => {
//       document.querySelector('input[name="q"]').value = `JavaScript${i}`;
//     });

//     await page.keyboard.press('Enter');

//     const waitForLoad = new Promise((resolve) => page.on('load', () => resolve()));
//     await page.evaluate(() => {
//       document.querySelector('input[value="Google Search"]').click();
//     });
//     await waitForLoad;
//   }
