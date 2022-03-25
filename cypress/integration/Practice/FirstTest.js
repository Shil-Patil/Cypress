/// <reference types="Cypress" />

describe('My First test suite in cypress',function()
{
    it('Testcase1',function()  
    {

       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get(":nth-child(2) > .col-xs-12 > .form-control").type("abhishek@trigensoft.com")
       cy.get(':nth-child(3) > .col-xs-12 > .form-control').type("Admin@123")
       cy.get(".btn").click

    })
})
