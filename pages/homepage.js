let homepage=function(){

    let inputOne=element(by.model('first'));
    let inputTwo=element(by.model('second'));
    let clickGO=element(by.css('[ng-click="doAddition()"]'));

    this.get=function(url){
        browser.get(url);
    };
    this.enterNumber=function(no, position){
        switch(position)
        {
            case 'first':
                inputOne.sendKeys(no);
                break;
            case 'second':
                inputTwo.sendKeys(no);
                break;
        }
    };
    this.enterSecondNumber=function(secondNo){
        inputTwo.sendKeys(secondNo);
    };
    this.clickGoButton=function(){
        clickGO.click();
    };
    this.verifyResult=function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homepage();
