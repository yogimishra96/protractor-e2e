// describe('open google', function () {
//     it('search habilelabs', function () {
//         browser.waitForAngularEnabled(false);
//         browser.get('https://www.google.com');
//         element(by.id('lst-ib')).sendKeys('habilelabs');
//         element(by.name('btnK')).click();
//
//     })
//     it('click on habilelabs link',function(){
//         element(by.linkText('Website')).click().then(function() {
//             // do some stuff
//             element(by.css('.et_search_icon')).click();
//         });
//
//         // alert('done');
//
//         // var EC = protractor.ExpectedConditions;
//         // // Waits for an alert pops up.
//         // browser.wait(EC.alertIsPresent(), 5000);
//
//     })
//
// })

// describe('open habilelabs and click', function(){
//    it('df',function(){
//        browser.waitForAngularEnabled(false);
//        browser.get('http://www.habilelabs.io');

//        var el = element(by.id('et_search_icon'));

//        // console.log(el);
//        el.getText().then(function(text) {
//            console.log(text);
//        });

//       // var navigation =  element(by.id('et_search_icon').getTagName());
//    })

// })

describe('Protractor Demo App', function() {
    it('Open login tab', function() {
        browser.get('http://beta.siquo.com/');  
        element(by.css('.sign-in')).click();
    });

    it('Insert values and submit form', function(){
        browser.sleep(2000);
        element(by.name('email')).sendKeys('dannyywhite@gmail.com'); 
        browser.sleep(2000);
        element(by.name('password')).sendKeys('87654321');           
        element(by.css('.mat-checkbox-inner-container')).click();
        element(by.css('.mat-checkbox-inner-container')).click();
        element(by.css('.mat-checkbox-inner-container')).click();       
        element(by.css('.mat-checkbox-inner-container')).click();
        element(by.css('.mat-checkbox-inner-container')).click();
        element(by.css('.simple-button.mat-button')).click().then(function(){  
            browser.sleep(2000);
             expect(browser.driver.getCurrentUrl()).toMatch('http://beta.siquo.com/admin/settings/profile');

        });
    });

    it('After login add property',  function(){
        element(by.css('.submit-listing.mat-button')).click().then(function(){
            element(by.css('.mat-tab-label.mat-ripple')).click().then(function () {
                browser.sleep(2000);

                element(by.css('.mat-radio-container')).click().then(function () {
                    element.all(by.css('.mat-select-content')).each(function (eachElement, index) {
                        eachElement.click();
                        browser.sleep(5000);//select the <select>
                        element(by.css('mat-option')).click().then(function () {
                            browser.sleep(5000);
                            element(by.css('.all-button.mat-button')).click().then(function () {

                                browser.sleep(5000);
                                browser.sleep(5000);
                            })

                        });  //select the first md-option




                    });
                    // browser.sleep(5000);
                    // var EC = protractor.ExpectedConditions;
                    // var select = element(by.css('.select-option-div'));
                    // // browser.wait(EC.visibilityOf(mumbaiCity));
                    //  var a = await select.sendKeys('here');
                    // console. log(a);
                     // element(by.css('.specific-residential.extra-margin')).click();
                    // console.log(select);
                    // var EC = protractor.ExpectedConditions;
                    // var selectOption = element(by.css('.mat-select-arrow'));
                    // browser.wait(EC.visibilityOf(selectOption), 10000);
                    // selectOption.click();
                })
            });
        });
    })

        // .
        // then(function(){
        //     // submit-listing mat-button
        //     // browser.driver.sleep(5000);
                
        // });
                //    browser.waitForAngular();  
                //    element(by.css('.change-btn.mat-button')).click();
        // .then(function() {
            // browser.waitForAngular();
        //     expect(browser.driver.getCurrentUrl()).toMatch('http://beta.siquo.com/admin/settings/profile');
        //   });           
       
        // element(by.linkText('Forgot Password')).click(function());
        


    // it('after login', function(){
    //     browser.waitForAngular();  
    //     element(by.css('.change-btn.mat-button')).click();

    // } ); 

       //    console.log(a);
    // });
});



