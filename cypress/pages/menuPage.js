class MenuPage{

    selectorList(){
        const selectors = {
            myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
        }

        return selectors

    }
    AccessMyInfoPage(){
        cy.get(this.selectorList().myInfoButton).click()
    }
}

export default MenuPage