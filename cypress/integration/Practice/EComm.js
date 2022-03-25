/// <reference types="Cypress"/>

describe('Testsuit: Ecommerse website',function()
{

before(function()
{
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
})

it('',function()
{
cy.visit("https://rahulshettyacademy.com/angularpractice/")
cy.get(".form-control.ng-pristine.ng-invalid.ng-touched").type(this.data.name)
cy.get('[name="email"]').type(this.data.email)
/*cy.get("exampleInputPassword1").type()
cy.get("#exampleCheck1").type()
*/cy.get("exampleFormControlSelect1").select(this.data.gender)
cy.get(".form-check:nth-child(3)").check().should('be.checked')
cy.get("[name='bday']").type("13-06-1993")
cy.get(".btn.btn-success").click()
cy.get(".ng-pristine.ng-valid.ng-touched").type()

})

it('',function()
{
    
})

it('',function()
{
    
})
})