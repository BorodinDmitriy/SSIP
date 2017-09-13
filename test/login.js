var assert = require('assert'),
	timeout = 30000;

var loginInputSelector = '#login',
	passwordInputSelector = '#password',
	successSelector = '#success',
	submitButtonSelector = '#submitFormButton',
	failureSelector = '#failure';

describe('login', function(){
	it('successful registration', function(){
		browser
			.url("/")
			.waitForVisible(loginInputSelector, timeout);
			browser.waitForVisible(passwordInputSelector, timeout);
			browser.waitForVisible(submitButtonSelector, timeout);
			browser.click(loginInputSelector);
			browser.setValue(loginInputSelector, '123');
			browser.setValue(passwordInputSelector, '123');
			browser.pause(2000);
			browser.click(submitButtonSelector);
			browser.waitForVisible(successSelector, timeout);
	});

	it('registration failure', function(){
		browser
			.url("/")
			.waitForVisible(loginInputSelector, timeout);
			browser.waitForVisible(passwordInputSelector, timeout);
			browser.waitForVisible(submitButtonSelector, timeout);
			browser.click(loginInputSelector);
			browser.setValue(loginInputSelector, '123');
			browser.setValue(passwordInputSelector, '1234');
			browser.pause(2000);
			browser.click(submitButtonSelector);
			browser.waitForVisible(failureSelector, timeout);
	});
})