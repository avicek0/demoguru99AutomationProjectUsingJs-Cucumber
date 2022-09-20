/// <reference types = "Cypress" />

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../pageObjectPattern/HomePage'
import RegisterPage from '../../pageObjectPattern/RegisterPage'
import RequestQuotationPage from '../../pageObjectPattern/RequestQuotationPage'
import AllHeadersPage from '../../pageObjectPattern/AllHeadersPage'
import RetrieveQuotationPage from '../../pageObjectPattern/RetrieveQuotationPage'
import EditProfilePage from '../../pageObjectPattern/EditProfilePage'


const homePage = new HomePage();

const registerPage = new RegisterPage();

const requestQuotationPage = new RequestQuotationPage();

const allHeadersPage = new AllHeadersPage();

const retrieveQuotationPage = new RetrieveQuotationPage();

const editProfilePage = new EditProfilePage();

Given ('Open Demoguru99 page', function()
{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

When('Login Failure', function()
{
        homePage.getLoginEmail().type(this.data.nameOnlyy.Wemail)

        homePage.getLoginPassword().type(this.data.nameOnlyy.Wpassword)

        homePage.getLoginClickButton().click();
        homePage.getAssertion().should('have.text', 'Enter your Email address and password correct').log('Login Failed');

})

When('Register User', function()
{

        homePage.getClickRegisterButton().click()

        registerPage.getUserTitle().select('Mr')

        //Retrieving from fixtures 'nameOnly'
        registerPage.getFirstName().type(this.data.nameOnlyy.name)

        //Retrieving from env from cypress.config.js file
        registerPage.getSurname().type(Cypress.env('surname'))

        registerPage.getPhoneNumber().type('9841345678')

        registerPage.getBirthdayYear().select('1995').should('have.value','1995')

        registerPage.getBirthdayMonth().select('March').should('have.value','3')

        registerPage.getBirthdayDay().select('23').should('have.value','23')

        registerPage.getLicenseType().click()

        registerPage.getLicensePeriod().select('1')

        registerPage.getUserOccupation().select('Academic')

        registerPage.getUserStreet().type('Sifal')

        registerPage.getUserCity().type('Ktm City')

        registerPage.getUserCounty().type('Province')

        registerPage.getPostcode().type('1234')

        registerPage.getUserEmail().type('avicek.neupane@gmail.com')

        registerPage.getPassword().type('Guru@9908')

        registerPage.getConfirmPassword().type('Guru@9908')

        registerPage.getClickSubmitRegister().click()

})

When ('Login Succeed', function() {

        homePage.getLoginEmail().type(this.data.nameOnlyy.Remail)

        homePage.getLoginPassword().type(this.data.nameOnlyy.Rpassword)

        homePage.getLoginClickButton().click();

})

When ('Request Quotation', () => {

    allHeadersPage.getRequestQuotationHeader().click()
    
    requestQuotationPage.getBreakdowncover().select('Roadside').should('have.value','2')
    
    requestQuotationPage.getWindscreenRepair().click()
    
    requestQuotationPage.getIncidents().type('Accidents')
    
    requestQuotationPage.getVehicleRegistration().type('123')
    
    requestQuotationPage.getVehicleMileage().type('3000')
    
    requestQuotationPage.getVehicleAttributeValue().type('2000')
    
    requestQuotationPage.getParkingLocation().select('Private Property').should('have.value','Private property')
    
    requestQuotationPage.getPolicyStartYear().select('2014').should('have.value','2014')
    
    requestQuotationPage.getPolicyStartMonth().select('February').should('have.value','2')
    
    requestQuotationPage.getPolicyStartDay().select('24').should('have.value','24')
    
    requestQuotationPage.getCalculateAmount().click()
    
    requestQuotationPage.getRequestQuotation().click()

    requestQuotationPage.getBackToHeaderPage()

    })


When ('Retrieve Quotation', () => {

        allHeadersPage.getRetrieveQuotationHeader().click()
        
        retrieveQuotationPage.getIdentificationNumber()
        
        retrieveQuotationPage.getRetrieveIN().click()

        retrieveQuotationPage.getBackToHeaderPage()
    
    })    

When ('Open Profile', () => {

        allHeadersPage. getProfileHeader().click()
    
    })

Then ('Edit Profile', () => {

        allHeadersPage.getEditProfileHeader().click()

        editProfilePage.getUserTitle().select('Mr')

        editProfilePage.getSurname().type('Aviceeeeee')

        editProfilePage.getFirstname().type('Nepaliiiii')

        editProfilePage.getPhoneNumber().type('9841345678')

        editProfilePage.getBirthdayYear().select('1995').should('have.value','1995')

        editProfilePage.getBirthdayMonth().select('March').should('have.value','3')

        editProfilePage.getBirthdayDay().select('23').should('have.value','23')

        editProfilePage.getLicenseType().click()

        editProfilePage.getLicensePeriod().select('1')

        editProfilePage.getUserOccupation().select('Academic')

        editProfilePage.getUserStreet().type('Sifal')

        editProfilePage.getUserCity().type('Ktm City')

        editProfilePage.getUserCounty().type('Hattiban')

        editProfilePage.getPostcode().type('1234')

        editProfilePage.getEditUser().click()

        allHeadersPage. getProfileHeader().click()

})

Then ('LogOut', ()=> {

    allHeadersPage.getLogOutButton().click()
 
  })