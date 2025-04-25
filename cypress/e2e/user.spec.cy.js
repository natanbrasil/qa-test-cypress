import userdata from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'  
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe ('Orange HRM Tests', () => {

    const selectorList = {
        myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
        firstNameField: "input[placeholder='First Name']",
        lastNameField: "input[placeholder='Last Name']",
        driverLicenseField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
        dateField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
        dateCloseButton: ".oxd-form > :nth-child(3) > :nth-child(2)",
        saveButton: "button[type='submit']",
        genericNationality: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    }

    it('User Info Update - Sucess', () => {
        loginPage.accessLoginPage()
        loginPage.loginWitAnyUser(userdata.userSucess.username, userdata.userSucess.password)
        dashboardPage.checkDashboardPage()
        menuPage.AccessMyInfoPage()
        //cy.get(selectorList.firstNameField).clear().type('Natan')
        //cy.get(selectorList.lastNameField).clear().type('Lima')
        //cy.get(selectorList.driverLicenseField).clear().type('123456789')
        //cy.get(selectorList.dateField).clear().type('2025-10-01')
        //cy.get(selectorList.dateCloseButton).click()
        //cy.get(selectorList.genericNationality).click()
        //cy.get('.oxd-select-dropdown > :nth-child(27').click()
        //cy.get(selectorList.saveButton).eq(0).click()
        //cy.get('body').should('contain', 'Success')
    })
})
