/// <reference types="Cypress"/>

describe('Test Suit: alert',function(){

    it('Testxcase',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        cy.on('window:alert',(al)=>
        {
           expect(al).to.equal('Hello , share this practice page and share your knowledge')    
        })
        cy.get("#confirmbtn").click()
        cy.on('window:confirm',(con)=>
        {
            expect(con).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    
    it('Testcase2',function(){
    cy.get("#opentab").invoke('removeAttr','target').click()
    
    cy.url().should('include','rahulshettyacademy')
    cy.go('back')


    })
})
