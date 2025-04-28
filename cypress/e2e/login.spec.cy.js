import userdata from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'  

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe ('Orange HRM Tests', () => {

    it('Access Failed', () => {
        loginPage.accessLoginPage()
        loginPage.loginWitAnyUser(userdata.userFail.username, userdata.userFail.password)
        loginPage.checkAcessInvalid()
    })

    it('Access Sucess', () => {
        loginPage.accessLoginPage()
        loginPage.loginWitAnyUser(userdata.userSucess.username, userdata.userSucess.password)
        dashboardPage.checkDashboardPage()
    })
})
