Feature: End to End Demoguru99 Automation
    Feature Description

    Scenario: Website Login Check
    Given Open Demoguru99 page
    When Fill in Login details
    When Register User
    When Login Succeed
    When Request Quotation
    When Retrieve Quotation
    When Open Profile
    When Edit Profile
    Then LogOut
    
    