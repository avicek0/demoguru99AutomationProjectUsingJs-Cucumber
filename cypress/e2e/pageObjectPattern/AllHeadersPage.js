class AllHeadersPage
{
    getRequestQuotationHeader(){
        return cy.get('#ui-id-2')
    }

    getRetrieveQuotationHeader(){
        return cy.get('#ui-id-3')
    }

    getProfileHeader(){
        return cy.get('#ui-id-4')

    }

    getEditProfileHeader(){
        return cy.get('#ui-id-5')
      
    }

    getLogOutButton(){
        return cy.get('.button_to > .btn')
        
    }
}

export default AllHeadersPage