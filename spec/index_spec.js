var MenuPage = require('../pages/menu.po')

describe('Pokemon App', function() {

  var menuPage = new MenuPage();

  it('should have a Clube', async () => {
    menuPage.visit();
    menuPage.entrar();
    expect(browser.getTitle()).toContain('Clube de Treinadores Pokémon | Pokemon.br');
  });

  it('should have a title', async () => {
    menuPage.visit();
    menuPage.entrar();
    expect(browser.getTitle()).toContain('Pokemon.com');
  });

});
