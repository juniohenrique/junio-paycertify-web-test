// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
	specs: [
		'./spec/*_spec.js'
	],
	multiCapabilities: [
		{
			'browserName': 'chrome',
			'chromeOptions': {
				args: [ "--disable-gpu"]
			}
		}
	],
	directConnect: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',
	baseUrl: 'https://www.pokemon.com/us/pokedex/',
	framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true,
		print: function () { }
	},
	onPrepare() {
		browser. waitForAngularEnabled(false);
		browser.manage().timeouts().implicitlyWait(5000);
		browser.driver.manage().window().setSize(1280, 1024);
		jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
	}
};
