class RegisterPage
{
    getUserTitle(){
        return cy.get('#user_title')
    }

    getFirstName(){
        return cy.get('#user_firstname')
    }
    getSurname(){
        return cy.get('#user_surname')
    }

    getPhoneNumber(){
        return  cy.get('#user_phone')
    }


    getBirthdayYear(){
        return cy.get('#user_dateofbirth_1i')
    }
    getBirthdayMonth(){
        return cy.get('#user_dateofbirth_2i')
    }
    getBirthdayDay(){
        return  cy.get('#user_dateofbirth_3i')
    }
   
    getLicenseType(){
        return cy.get('#licencetype_f')
    }

     getLicensePeriod(){
        return cy.get('#user_licenceperiod')
    }  
    getUserOccupation(){
        return cy.get('#user_occupation_id')
    }

    getUserStreet(){
        return cy.get('#user_address_attributes_street')
    }

    getUserCity(){
        return cy.get('#user_address_attributes_city')
    }

    getUserCounty(){
        return cy.get('#user_address_attributes_county')
    }

    getPostcode(){
        return cy.get('#user_address_attributes_postcode')
    }

    getUserEmail(){
        return cy.get('#user_user_detail_attributes_email')
    }

    getPassword(){
        return cy.get('#user_user_detail_attributes_password')
    }

    getConfirmPassword(){
        return cy.get('#user_user_detail_attributes_password_confirmation')
    }

    getClickSubmitRegister(){
        return cy.get('[name="submit"]')
    }

}

export default RegisterPage;