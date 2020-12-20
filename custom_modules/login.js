// css selector
const LOGIN_INPUT = 'input[type="text"]';
const PASSWORD_INPUT = 'input[type="password"]';
const SUBMIT = '#fm1 > input.btn.btn-block.btn-submit';

module.exports = async (page, logInfo) => {

    function sleep(milliSeconds) {
        const startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds) {
            // console.log(new Date().getTime());
        }//暂停一段时间 10000=1S。
    }
    const login = 'your name';
    const password = 'your password';
    const loginUrl = 'your test url';

    logInfo(`Loading ${loginUrl}`);

    // Go to the login page url, and wait for the selector to be ready.
    await page.goto(loginUrl);
    await page.waitForSelector(LOGIN_INPUT);

    logInfo('Logging in...');

    // Type creditentials.
    await page.type(LOGIN_INPUT, login);
    sleep(10000);
    await page.type(PASSWORD_INPUT, password);
    await page.click(SUBMIT)

    logInfo('Redirecting');

    // The process will continue once the redirect is resolved.
    return page.waitForNavigation();
};
