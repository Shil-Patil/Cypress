///<reference types ="cypress" />

const data =require('./example.json');
const T_S =require('./SignatureUtil.js')

describe('Test Suit: GET BRANDS',function()
{
    
    it('Execute API',function()
    {
      cy.request({
          method :'GET',
           url : data.SC_URL,
           headers :{
            Action: data.Action,
            Format: data.format,
            Timestamp: T_S.time1,
            UserId: data.sc_uname,
            Version : data.version,
            Signature : T_S.sign1
          }
      }).then(function(res)
      {
        expect(res.status).to.equal(200)
       // expect(res.body).to.equal(SuccessResponse)
      })
    })
    it('Execute API2',function()
    {
      cy.request('GET','https://sellercenter-api-staging.falabella.com?Action=GetBrands&Format=XML&Timestamp=2021-12-09T08%3A26%3A54-03%3A00&UserID=ext_spatil%40falabella.cl&Version=1.0&Signature=7cf494f179b94110276d425c1e71410791b6154843dcee0d8bb5151a2228a722')
    })
  
})