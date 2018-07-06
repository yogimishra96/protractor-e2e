describe('select test', function(){
    it('select value', function () {
        browser.get('http://localhost:6600/');
        // element(by.css('mat-form-field-wrapper')).click();
        element.all(by.css('.mat-select-content')).each(function (eachElement, index) {
            eachElement.click();                    //select the <select>
            element(by.css('mat-option')).click();   //select the first md-option
        });

    })
})