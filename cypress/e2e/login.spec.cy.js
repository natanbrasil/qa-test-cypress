describe ('Orange HRM Tests', () => {
    it('Login-Sucess', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.url('pathname').should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') 
        cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
    })
    it('Login-Fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin1')
        cy.get("input[placeholder='Password']").type('admin1234')
        cy.get('.oxd-button').click()
        cy.get("div[role='alert']").should('be.visible')
        //caso queira pular esse teste pode user o it.skip
    })
})
