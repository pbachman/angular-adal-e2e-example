import { AppPage } from './app.po';
import { browser } from '../../node_modules/protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  // avoid "not clickable at point (x,y)" errors
  // see https://github.com/angular/protractor/issues/1555
  const clickWhenClickable = function (el) {
    return browser.wait(function () {
      return el.click().then(
        function () {
          return true;
        },
        function () {
          return false;
        });
    });
  };

  const DoLogin = function () {
    const loginInput = page.getLoginInputField().first();

    return browser.wait(function () {
      return loginInput.isPresent();
    }).then(function () {
      loginInput.sendKeys('[E-MAIL]');

      const nextButton = page.getNextButton();
      nextButton.click();

      const password = page.getPasswordInputField().first();
      password.sendKeys('[PWD]');

      // click "Sign in"
      return clickWhenClickable(page.getNextButton()).then(function () {
        // click "Yes" for "Stay signed in?"
        return clickWhenClickable(page.getNextButton());
      });
    });
  };

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();

    DoLogin().then(function () {
      browser.waitForAngularEnabled(true);
      page.navigateTo();
      expect(page.getParagraphText()).toContain('Welcome');
    });
  });
});
