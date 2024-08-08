Feature('login');

Scenario('Hatalı kullanıcı adı', (I) => {
    I.amOnPage('http://amazon.com');
    I.waitForElement(('//div[@id="nav-singin-tooltip"]'), 10);
    I.click('//div[@id="nav-al-container"]');
    I.waitForElement('//input[@id="ap_email"]', 10);
    I.fillField('//input[@id="ap_email"]', 'ddddd');
    I.waitForElement('//input[@id="continue"]', 10);
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(), 'Wrong or Invalid email address or mobile phone number.')]");

});


