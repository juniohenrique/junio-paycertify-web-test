var  MenuPage = function() {
    this.login = element(by.css('.sign-up span'));

    };

    MenuPage.prototype.visit = function (){
        browser.get('/');
    };

    MenuPage.prototype.entrar = function (){
        this.login.click();
    };



module.exports = MenuPage;
