const puppeteer = require('puppeteer');

(async () => {
    try{
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium-browser'
          })
        const page = await browser.newPage();
        await page.goto('/addUsers.html');
        await page.waitForSelector('.btn btn-primary');
        await page.click('.btn btn-primary')
        return await page.screenshot({ path:'example.png' } )

        await broswer.close();
    }
    catch (err) {
        console.log(err)
    }
})()



