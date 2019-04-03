var MenuPage = require('../pages/menu.po')

describe('Pokemon App', function() {

  var menuPage = new MenuPage();

  it('should have a Clube', async () => {
    menuPage.visit();
    menuPage.entrar();
    expect(browser.getTitle()).toContain('Pokémon Trainer Club | Pokemon.com');
  });

  it('should have Bulbasaur', async () => {
    menuPage.visit();
    menuPage.setPokeName("Bulbasaur");
    menuPage.buscar();
    expect(menuPage.getBulbasaur.isPresent()).toBe(true);
    expect(menuPage.getUrsaring.isPresent()).toBe(false);
  });

  it('should have Ursaring', async () => {
    menuPage.visit();
    menuPage.setPokeName("Ursaring");
    menuPage.buscar();
    expect(menuPage.getUrsaring.isPresent()).toBe(true);
    expect(menuPage.getBulbasaur.isPresent()).toBe(false);

  });

});
