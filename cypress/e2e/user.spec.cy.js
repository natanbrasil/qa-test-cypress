import userdata from '../fixtures/users/userData.json'

describe ('Orange HRM Tests', () => {

    const selectorList = {
        usernameField: "input[placeholder='Username']",
        passwordField: "input[placeholder='Password']",
        loginButton: "button[type='submit']",
        sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
        dashboardGrid: ".orangehrm-dashboard-grid",
        myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
        alertMessage: "div[role='alert']",
        firstNameField: "input[placeholder='First Name']",
        lastNameField: "input[placeholder='Last Name']",
        driverLicenseField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
        dateField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
        dateCloseButton: ".oxd-form > :nth-child(3) > :nth-child(2)",
        saveButton: "button[type='submit']"
    }

    it.only('User Info Update - Sucess', () => {
        cy.visit('/auth/login')
        cy.get(selectorList.usernameField).type(userdata.userSucess.username)
        cy.get(selectorList.passwordField).type(userdata.userSucess.password)
        cy.get(selectorList.loginButton).click()
        cy.url('pathname').should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
        cy.get(selectorList.dashboardGrid)
        cy.get(selectorList.myInfoButton).click()
        cy.get(selectorList.firstNameField).clear().type('Natan')
        cy.get(selectorList.lastNameField).clear().type('Lima')
        cy.get(selectorList.driverLicenseField).clear().type('123456789')
        cy.get(selectorList.dateField).clear().type('2025-10-01')
        cy.get(selectorList.dateCloseButton).click()
        cy.get(selectorList.saveButton).eq(0).click()
        cy.get('body').should('contain', 'Success')
    })
})
