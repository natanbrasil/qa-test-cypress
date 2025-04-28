import userdata from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'  
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe ('Orange HRM Tests', () => {

    

    it('Login and User Info Update - Sucess', () => {
        //acessar a pagina
        loginPage.accessLoginPage()
        loginPage.loginWitAnyUser(userdata.userSucess.username, userdata.userSucess.password)
        //garantir que a pagina de dashboard foi carregada
        dashboardPage.checkDashboardPage()
        //acessar a pagina de menu
        menuPage.AccessMyInfoPage()
        //atualizar os dados 
        myInfoPage.fillPersonDetails(chance.first(), chance.last())
        myInfoPage.fillEmployeeDetails(chance.prime(), '2025-10-01')
        myInfoPage.saveForm()
    })

    it('Access Failed', () => {
        loginPage.accessLoginPage()
        loginPage.loginWitAnyUser(userdata.userFail.username, userdata.userFail.password)
        loginPage.checkAcessInvalid()
    })
})
