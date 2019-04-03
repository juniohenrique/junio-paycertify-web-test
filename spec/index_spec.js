var MenuPage = require('../pages/menu.po')

describe('Pokemon App', function() {

  var menuPage = new MenuPage();

  it('should have a Clube', async () => {
    menuPage.visit();
    menuPage.entrar();
    expect(browser.getTitle()).toContain('Pokémon Trainer Club | Pokemon.com');
  });

  it('should have a title', async () => {
    menuPage.visit();
    menuPage.entrar();
    expect(browser.getTitle()).toContain('Pokemon.com');
  });

});
