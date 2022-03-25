/// <reference types="Cypress" />
describe("Test Suit: Green cart website",function()
{

    it("Test case1: Add veggies to cart", function()
     {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
       // cy.wait("2000")
       //Identifies invisible element
       cy.get(".product").should('have.length',5)
        cy.get(".product:visible").should('have.length',4)
        //parent to child traversing
        cy.get(".products").find('.product').should('have.length',4)
        
        //cy.get(":nth-child(3) > .product-action > button").click()  this is another way of parent child chaining
        //parent child chaining
        cy.get(".products").find('.product').eq(2).contains("ADD TO CART").click()
        
       cy.get(".products").find(".product").each(($ele ,index, $list)=>
        {
            const textveg = $ele.find("h4.product-name").text()
            if(textveg.includes('Cashews')){
                cy.wrap($ele).find('button').click()
            }
        }  )
        //one way to keep promise
        const tes =cy.get(".brand")
        cy.log(tes.text)
        //2end way
        cy.get(".brand").then(function(logo){
            cy.log(logo.text())
        })

    }    )

       it("Test case2: Place order", function()
    {
        cy.get(".cart-icon").click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.get(".product-name").should('have.length',2)
        cy.get(".product-name").each(($el,index,$list)=>
        {
        cy.log($el.text())
        }  )

        cy.get(".promoCode").type("102")
        cy.get("button").each(($ele,index,$list)=>
        {
            const text=$ele.text()
            if(text=='Apply')
            {
                cy.wrap($ele).click()
                cy.log("Click to apply button.")
            }else{
                cy.wrap($ele).click()
                cy.log("Click to place order")
            }
            
        }  )
    }    )

    
   
})