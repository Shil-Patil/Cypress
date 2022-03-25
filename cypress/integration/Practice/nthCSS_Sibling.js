/// <reference types="Cypress"/>

describe('Test Suit: CSS methods',function(){

    it('Testxcase: get nth child',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       cy.get("tr td:nth-child(2)").each(($el,index,$list)=>
       {
           const textgen = $el.text()
        console.log(textgen)

           if(textgen.includes("Python"))
           {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {   cy.log(price.text())
                const a = price.text()
                expect(a).to.equal('25')
            })
            
          }
       })
    } )


    it('Testxcase: MouseHover',function(){
       // cy.get('#mousehover').click()
       cy.get(".mouse-hover-content").invoke('show')

       cy.contains("Top").click({force:true})
       
    } )

})   