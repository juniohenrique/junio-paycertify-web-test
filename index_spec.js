describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.google.com.br');

    expect(browser.getTitle()).toEqual('Google');
  });
});
