class LoginPage {

    selectorList () {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "button[type='submit']",
            alertMessage: "div[role='alert']"
        }

        return selectors
    } 

    accessLoginPage () {
        cy.visit('/auth/login')
    }

    loginWitAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
    checkAcessInvalid() {
        cy.get(this.selectorList().alertMessage).should('be.visible')
    }
}

export default LoginPage