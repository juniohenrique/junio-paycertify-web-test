var MenuPage = function () {
    this.login = element(by.css('.sign-up span'));
    this.searchPoke = element(by.css('#searchInput'));
    this.submitSearch = element(by.css('#search'));
    this.getUrsaring = element(by.css('a[href$=ursaring]'));
    this.getBulbasaur = element(by.css('a[href$=bulbasaur]'));
};

MenuPage.prototype.visit = function () {
    browser.get('/pokedex/');
};

MenuPage.prototype.entrar = function () {
    this.login.click();
};

MenuPage.prototype.setPokeName = function (pokeName) {
    this.searchPoke.sendKeys(pokeName);
};

MenuPage.prototype.buscar = function () {
    this.submitSearch.click();
};

MenuPage.prototype.getPokeLink = function (pokeName) {
    this.submitSearch.click();
};


module.exports = MenuPage;
