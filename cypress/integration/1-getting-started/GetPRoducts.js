
/// <reference types="Cypress"/>

describe('Test Suit1: Falabella_PRODUCT ENDPOINTS',function()
{
    
  it('Testcase 1: GetProducts',function()
  
    {
        cy.request('GET','https://sellercenter-api-staging.falabella.com/?Action=GetProducts&Format=JSON&Timestamp=2021-11-29T10:26:45.151Z&UserID=ext_jsuvarna@Falabella.cl&Version=1.0&Signature=9c7a1209969f2ed201b006e023f6af5ac1f10aca9d93694b545466a976e4cd89')
        .then(function(res)
        {
            expect(res.status).to.equal(200)
           // expect(res.body).contains('Products: {Product: Array(159)}')

        })
        /*cy.intercept({
        method : 'GET',
        url : 'https://sellercenter-api-staging.falabella.com/?Action=ProductCreate&Format=JSON&Timestamp=2021-11-29T10:26:45.151Z&UserID=ext_jsuvarna@Falabella.cl&Version=1.0&Signature=9c7a1209969f2ed201b006e023f6af5ac1f10aca9d93694b545466a976e4cd89'
         } ,
    {Status code : 200,
        body :[{   }]
    } )*/        
})

    it('CASE2 : PRoductCreate',function()
    {
     cy.request('POST','https://sellercenter-api-staging.falabella.com?Action=ProductCreate&Format=JSON&Timestamp=2021-11-30T05:04:13.527Z&UserID=ext_jsuvarna@Falabella.cl&Version=1.0&Signature=bf774345ec139090d19c48905402963bce8a2e7530ea7121e1eab7900eda49a1')
     
     .then(function(res)
        { expect(res.status).to.equal(200)
        })
    }) 

    it('case 3: Product Update',function()
    {
        cy.request({
            method: 'POST',
            url: 'https://sellercenter-api-staging.falabella.com?Action=ProductUpdate&Format=JSON&Timestamp=2021-11-30T04:10:50.707Z&UserID=ext_jsuvarna@Falabella.cl&Version=1.0&Signature=9539d31542eeefd7c4fd0525f5b2ecfd7fccd2e9f25859cc801079937f1942aa',           
            body:{
               'Product' :{
                'SellerSku': '4105382173aaee4',
                'ParentSku' :'',
                'Status' :'active',
                'Name' : 'Magic Product' ,
                'Variation' : 'XXL',
                'PrimaryCategory':'4',
                'Categories':'2,3,5',
                'Description' : '<![CDATA[This is a <b>bold</b> product.]]>',
                'Brand' : 'ASM',  
                'Price':'1.00', 
                'SalePrice':'32.5',
                'SaleStartDate':'2013-09-03T11:31:23+00:00',
                'SaleEndDate':'2013-10-03T11:31:23+00:00',
                'TaxClass':'default',
                'ShipmentType' : 'dropshipping',
                'ProductId' :'xyzabc',
                'Condition' : 'new',
                'ProductData':{
                    'Megapixels' : '490',
                    'OpticalZoom' :'7',
                    'SystemMemory' : '4',
                    'NumberCpus':'32',
                    'Network' :'This is network' },
                    'Quantity' :'10'},
                 'Product' :{
                        'SellerSku': '513558029156743ab4e3',
                        'ParentSku' :'',
                        'Status' :'active',
                        'Name' : 'Normal Product' ,
                        'Variation' : 'XS',
                        'PrimaryCategory':'4',
                        'Categories':'2,3,5',
                        'Description' : '<![CDATA[This is a <i>cursive</i> product.]]>',
                        'Brand' : 'BIN',  
                        'Price':'2.500', 
                        'SalePrice':'1.50',
                        'SaleStartDate':'2016-07-01T11:15:07+00:00',
                        'SaleEndDate':'2016-07-01T11:15:07+00:00',
                        'TaxClass':'default',
                        'ShipmentType' : 'dropshipping',
                        'ProductId' :'foobar',
                        'Condition' : 'new',
                        'ProductData':{
                            'Megapixels' : 1,
                            'OpticalZoom' :100,
                            'SystemMemory' : 2,
                            'NumberCpus':3,
                            'Network' :'This is network' },
                            'Quantity' :'5'}
          
            }
  
        }).then(function(res)
        { expect(res.status).to.equal(200)
        })
    })
    it('case 3: Product Update',function()
    {
        cy.request({
            method: 'POST',
            url: 'https://sellercenter-api-staging.falabella.com?Action=ProductUpdate&Format=JSON&Timestamp=2021-11-30T04:10:50.707Z&UserID=ext_jsuvarna@Falabella.cl&Version=1.0&Signature=9539d31542eeefd7c4fd0525f5b2ecfd7fccd2e9f25859cc801079937f1942aa'
        }).then(function(res)
        { expect(res.status).to.equal(200)
        })
    })
})

