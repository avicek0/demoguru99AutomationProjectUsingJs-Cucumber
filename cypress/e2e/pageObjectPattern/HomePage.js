class HomePage

{
  
    getLoginEmail()
    {
       return cy.get('#email')
    }
    
    getLoginPassword(){

       return cy.get('#password')
    }

        
    getLoginClickButton(){
       return cy.get(':nth-child(3) > .btn')
    }
       
    getAssertion(){
      return  cy.get('span > b')
    }

    getClickRegisterButton(){
      return cy.get('a.btn')
    }
       
    
}

export default HomePage;