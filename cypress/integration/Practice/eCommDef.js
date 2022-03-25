import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";


Given('Add to cart',function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
   // cy.wait("2000")
   //Identifies invisible element
   cy.get(".product").should('have.length',5)
    cy.get(".product:visible").should('have.length',4)
    //parent to child traversing
    cy.get(".products").find('.product').should('have.length',4)
    
})
When('I Added items to cart',function()
{
 cy.get(".products").find('.product').eq(2).contains("ADD TO CART").click()
        
       cy.get(".products").find(".product").each(($ele ,index, $list)=>
        {
            const textveg = $ele.find("h4.product-name").text()
            if(textveg.includes('Cashews')){
                cy.wrap($ele).find('button').click()
            }
       
})
And(' Click to proceed',function()
{
    cy.get(".cart-icon").click()
    cy.contains("PROCEED TO CHECKOUT").click()
    cy.get(".product-name").should('have.length',2)
    cy.get(".product-name").each(($el,index,$list)=>
    {
    cy.log($el.text())
    }  )

})
Then(' ORder should get placed.',function()
{
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
    }) 
})
})