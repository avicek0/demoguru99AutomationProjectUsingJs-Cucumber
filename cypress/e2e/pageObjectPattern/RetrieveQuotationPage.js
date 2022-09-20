class RetrieveQuotationPage
{
    getIdentificationNumber(){
        var randomNumber = Math.floor(Math.random()* 90000) + 10000;
       return cy.get('form > [type="text"]').invoke('val', randomNumber)
    }

    getRetrieveIN(){
        return cy.get('#getquote')
    }

    getBackToHeaderPage(){
        return cy.go('back')
    }
}

export default RetrieveQuotationPage;