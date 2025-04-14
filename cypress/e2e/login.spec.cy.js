describe ('Orange HRM Tests', () => {

    const selectorList = {
        usernameField: "input[placeholder='Username']",
        passwordField: "input[placeholder='Password']",
        loginButton: "button[type='submit']",
        sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
        alertMessage: "div[role='alert']"
    }

    it('Login-Sucess', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorList.usernameField).type('Admin')
        cy.get(selectorList.passwordField).type('admin123')
        cy.get(selectorList.loginButton).click()
        cy.url('pathname').should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
        cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
    })
    it('Login-Fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorList.usernameField).type('Admin1')
        cy.get(selectorList.passwordField).type('admin1234')
        cy.get(selectorList.loginButton).click()
        cy.get(selectorList.alertMessage).should('be.visible')
        //caso queira pular esse teste pode user o it.skip
    })
})
