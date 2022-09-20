class EditProfilePage
{
    getUserTitle(){
        return cy.get('#user_title')
    }

    getSurname(){
        return cy.get('#user_surname')
    }
    getFirstname(){
        return cy.get('#user_firstname')
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
        return cy.get('#user_licencetype_f')
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

    getEditUser(){
        return cy.get('#edit_user_ > .actions > .btn')
    }
}

export default EditProfilePage