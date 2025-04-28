class MyInfoPage{

    selectorList(){
        const selectors = {
                firstNameField: "[name='firstName']",
                lastNameField: "input[placeholder='Last Name']",
                driverLicenseField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
                dateField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
                dateCloseButton: ".--close",
                saveButton: "button[type='submit']",
                genericNationality: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
            }

        return selectors

    }
    fillPersonDetails(firstName, lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(driverLicense, date){
        cy.get(this.selectorList().driverLicenseField).clear().type(driverLicense)
        cy.get(this.selectorList().dateField).clear().type(date)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericNationality).click()
        cy.get('.oxd-select-dropdown > :nth-child(27').click()
        
    }
    saveForm (){
        cy.get(this.selectorList().saveButton).eq(0).click()
        cy.get('body').should('contain', 'Success')

    }
 }

export default MyInfoPage