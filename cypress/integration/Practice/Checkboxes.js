/// <reference types="Cypress" />

describe('Test Suit: For checkboxes,dropdowns, tables',function()
{
    it("Test case1: Checkboxes and dropdowns.", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       //2 assertion in one line giving timeedout error
       cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
      cy.get("#checkBoxOption1").should('have.value','option1')
      // cy.wait(3000)
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked')

       cy.get("#dropdown-class-example").select("option1").should('have.value','option1')
       cy.get("#autocomplete").type("Ind")
       cy.get(".ui-menu-item div").each(($el,index,$list)=>
       {
           const text = $el.text()
           cy.log(text)
           if($el=='India'){
               $el.click()
           }
       })
       cy.get("#autocomplete").should('have.value','Ind')
    }    )

    it('Test case 2: Visibility and Invisibility',function()
    {
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')

       //Radio buttons
       cy.get("input[value='radio2']").check().should('be.checked')
    })
})
