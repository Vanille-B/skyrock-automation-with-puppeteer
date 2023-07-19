const puppeteer = require('puppeteer');
require('dotenv').config();


async function run() {
    const browser = await puppeteer.launch({
        // Path to the Google Chrome browser executable (may vary by operating system)
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        // Headless mode disabled to display the browser window
        headless: false,
        // Additional arguments passed to the browser
        args: ['--remote-debugging-port=0'],
    });

    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,

    });

    // Navigate to Skyrock mobile login page
    await page.goto('https://www.skyrock.com/mobile/?connect=1');


    // Perform an evaluation on the page
    await page.evaluate(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Select and log the elements with class 'css-5a47r'
        const elements = document.querySelectorAll('.css-5a47r');
        elements.forEach((element) => console.log(element));

        if (elements.length >= 2) {
            // Simulate a click event on the second element
            const secondElement = elements[1];
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            secondElement.dispatchEvent(clickEvent);
        }
    });

    // Wait for the login input fields to appear
    await page.waitForSelector('#login');
    await page.waitForSelector('#password');

    // Enter the login credentials from environment variables
    // Make sure to update the 'xxx' values in the .env file with your actual username and password
    if (process.env.USERNAME === 'xxx' || process.env.PASSWORD === 'xxx' || !process.env.USERNAME || !process.env.PASSWORD) {
        console.log('Missing or incorrect username and/or password. Please check your .env file.');
    } else {
        await page.type('#login', process.env.USERNAME);
        await page.type('#password', process.env.PASSWORD);
    }

    // Click on the targets elements with class 'bouton_wide' and id 'barrenoire_post_link'
    await page.waitForSelector('.bouton_wide');
    await page.click('.bouton_wide');

    await page.waitForSelector('#barrenoire_post_link');
    await page.click('#barrenoire_post_link');

    // Process the current page
    async function processPage() {
        // Select elements with class 'etat-article'
        const elementsEtatArticle = document.querySelectorAll('.etat-article');
        console.log('Selected elements:', elementsEtatArticle);

        const elementsEtatArticleLength = elementsEtatArticle.length;
        console.log('Number of elements:', elementsEtatArticleLength);

        // Iterate over the elements and perform actions
        for (let i = 0; i < elementsEtatArticleLength; i++) {
            const elementEtatArticle = elementsEtatArticle[i];
            const etatButton = elementEtatArticle.querySelector('.etat2');
            // etat0 = 'hors ligne' / etat1 = 'public' / etat2 = 'secret' 
            // This changes the state of the element to 'secret' (etat2)

            // Add a click event listener and simulate a click on the etatButton
            elementEtatArticle.addEventListener('click', () => {
                etatButton.click();
                console.log('Button clicked!');
            });

            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            elementEtatArticle.dispatchEvent(clickEvent);
        }

        // Process pagination
        const paginationPage = document.querySelector('.pagination.pagination_admin li.current + li > a');
        if (paginationPage) {
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            paginationPage.dispatchEvent(clickEvent);
        } else {
            // Process the final page

            // Get the element with id 'barrenoire_account_link' and class 'account_pseudo'
            const myDiv = document.querySelector('#barrenoire_account_link .account_pseudo');
            console.log(myDiv);
            const myDivContent = myDiv.textContent.trim();
            myBlogUrl = `https://${myDivContent}.skyrock.com/secret`;
            console.log(myBlogUrl);

            // Open a new window/tab with the myBlogUrl
            const newPage = await window.open(myBlogUrl, '_blank');
            return newPage;
        }
    }

    // Process next page recursively
    async function processNextPage() {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        await page.evaluate(processPage);

        await page.waitForNavigation();

        await processNextPage();
    }

    // Start the processing of pages
    await processNextPage();

    // Close the browser
    await browser.close();
}

// Run the main function and catch any errors
run().catch((error) => console.error(error));