Feature: End to End Demoguru99 Automation
    Feature Description

    Scenario: Website Login Check
    Given Open Demoguru99 page
    When Login Failure 
    When Register User
    When Login Succeed
    When Request Quotation
    When Retrieve Quotation
    When Open Profile
    When Edit Profile
    Then LogOut
    
    