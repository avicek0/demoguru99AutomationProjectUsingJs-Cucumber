class RequestQuotationPage
{
    getBreakdowncover(){
        return cy.get('#quotation_breakdowncover')
    }

    getWindscreenRepair(){
        return cy.get('#quotation_windscreenrepair_t')
    }

    getIncidents(){
        return cy.get('#quotation_incidents')
    }

    getVehicleRegistration(){
        return cy.get('#quotation_vehicle_attributes_registration')
    }

    getVehicleMileage(){
        return cy.get('#quotation_vehicle_attributes_mileage')
    }

    getVehicleAttributeValue(){
        return cy.get('#quotation_vehicle_attributes_value')
    }

    getParkingLocation(){
        return cy.get('#quotation_vehicle_attributes_parkinglocation')
    }

    getPolicyStartYear(){
        return cy.get('#quotation_vehicle_attributes_policystart_1i')
    }

    getPolicyStartMonth(){
        return cy.get('#quotation_vehicle_attributes_policystart_2i')
    }

    getPolicyStartDay(){
        return cy.get('#quotation_vehicle_attributes_policystart_3i')
    }

    getCalculateAmount(){
        return cy.get('.btn-default')
    }

    getRequestQuotation(){
        return cy.get('#new_quotation > .actions > .btn-success')
    }

    getBackToHeaderPage(){
        return cy.go('back')
    }

}

export default RequestQuotationPage;