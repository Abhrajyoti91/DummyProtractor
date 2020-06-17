
let homepage = require('../pages/homepage');
var calculatorDemo = function () {
    this.Given('User launches site', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
    })
}

module.exports = calculatorDemo;
