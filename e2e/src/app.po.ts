import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLoginInputField() {
    return element.all(by.css('#i0116'));
  }

  getPasswordInputField() {
    return element.all(by.css('#i0118'));
  }

  getNextButton() {
    return element.all(by.css('#idSIButton9'));
  }
}
