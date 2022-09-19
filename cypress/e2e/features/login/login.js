/// <reference types = "Cypress" />
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pageObjectPattern/HomePage'



const homePage = new HomePage();

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

        cy.get('a.btn').click()

        cy.get('#user_title').select('Mr')

        //Retrieving from fixtures 'nameOnly'
        cy.get('#user_firstname').type(this.data.nameOnlyy.name)

        //Retrieving from env from cypress.config.js file
        cy.get('#user_surname').type(Cypress.env('surname'))

        cy.get('#user_phone').type('9841345678')
        cy.get('#user_dateofbirth_1i').select('1995').should('have.value','1995')
        cy.get('#user_dateofbirth_2i').select('March').should('have.value','3')
        cy.get('#user_dateofbirth_3i').select('23').should('have.value','23')
        cy.get('#licencetype_f').click()
        cy.get('#user_licenceperiod').select('1')
        cy.get('#user_occupation_id').select('Academic')
        cy.get('#user_address_attributes_street').type('Sifal')
        cy.get('#user_address_attributes_city').type('Ktm City')
        cy.get('#user_address_attributes_county').type('Province')
        cy.get('#user_address_attributes_postcode').type('1234')
        cy.get('#user_user_detail_attributes_email').type('avicek.neupane@gmail.com')
        cy.get('#user_user_detail_attributes_password').type('Guru@9908')
        cy.get('#user_user_detail_attributes_password_confirmation').type('Guru@9908')
        cy.get('[name="submit"]').click()

})

When ('Login Succeed', function() {

    homePage.getLoginEmail().type(this.data.nameOnlyy.Remail)

    homePage.getLoginPassword().type(this.data.nameOnlyy.Rpassword)

    homePage.getLoginClickButton().click();

})

When ('Request Quotation', () => {

    cy.get('#ui-id-2').click()
    
    cy.get('#quotation_breakdowncover').select('Roadside').should('have.value','2')
    
    cy.get('#quotation_windscreenrepair_t').click()
    
    cy.get('#quotation_incidents').type('Accidents')
    
    cy.get('#quotation_vehicle_attributes_registration').type('123')
    
    cy.get('#quotation_vehicle_attributes_mileage').type('3000')
    
    cy.get('#quotation_vehicle_attributes_value').type('2000')
    
    cy.get('#quotation_vehicle_attributes_parkinglocation').select('Private Property').should('have.value','Private property')
    
    cy.get('#quotation_vehicle_attributes_policystart_1i').select('2014').should('have.value','2014')
    
    cy.get('#quotation_vehicle_attributes_policystart_2i').select('February').should('have.value','2')
    
    cy.get('#quotation_vehicle_attributes_policystart_3i').select('24').should('have.value','24')
    
    cy.get('.btn-default').click()
    
    cy.get('#new_quotation > .actions > .btn-success').click()

    cy.go('back')
    
    })


When ('Retrieve Quotation', () => {

        cy.get('#ui-id-3').click()

        var randomNumber = Math.floor(Math.random()* 90000) + 10000;
    
        cy.get('form > [type="text"]').invoke('val', randomNumber)
        
        cy.get('#getquote').click()

        cy.go('back')
    
    
    })    

When ('Open Profile', () => {

        cy.get('#ui-id-4').click()
    
    })

Then ('Edit Profile', () => {

        cy.get('#ui-id-5').click()

        cy.get('#user_title').select('Mr')
        cy.get('#user_surname').type('Avice')
        cy.get('#user_firstname').type('Nepali')
        cy.get('#user_phone').type('9867543909')
        cy.get('#user_dateofbirth_1i').select('1995').should('have.value','1995')
        cy.get('#user_dateofbirth_2i').select('March').should('have.value','3')
        cy.get('#user_dateofbirth_3i').select('23').should('have.value','23')
        cy.get('#user_licencetype_f').click()
        cy.get('#user_licenceperiod').select('1')
        cy.get('#user_occupation_id').select('Academic')
        cy.get('#user_address_attributes_street').type('Sifal')
        cy.get('#user_address_attributes_city').type('Ktm City')
        cy.get('#user_address_attributes_county').type('Province')
        cy.get('#user_address_attributes_postcode').type('1234')
        cy.get('#edit_user_ > .actions > .btn')

})

Then ('LogOut', ()=> {

    const abc = cy.get('.button_to > .btn')
    abc.click()
 
  })