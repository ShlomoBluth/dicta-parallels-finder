/// <reference types="cypress"/>

////run tests on requests from parallels finder run some in hebrew mode and english mode

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

  sizes.forEach((sizeValue,sizeKey) => {


    describe('RequestsTest '+urlKey+' '+sizeKey,()=>{

    
      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
      })

      it('Error message for parallels/api response with a delay of 60 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        cy.parallelsFinderRequest({
          url:'/parallels/api/**',
          delaySeconds:60*5,
          message:'אופס יש לנו בעיה נסו שוב בעוד מספר דקות'
        })
      })
  
      it('Error message for parallels/api response with status code 500 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        cy.parallelsFinderRequest({
          url:'/parallels/api/**',
          status:500,
          message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
        })
      })
  
      it('Error message for parallels/api response with a delay of 60 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        cy.parallelsFinderRequest({
          url:'/parallels/api/**',
          delaySeconds:60*5,
          message:'Oops. Something went wrong Please try again.'
        })
      })
  
      it('Error message for parallels/api response with status code 500 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        cy.parallelsFinderRequest({
          url:'/parallels/api/**',
          status:500,
          message:'Oops. Something went wrong Please try again later'
        })
      })
  
      it('Error message for synopsis/uploadfile/0 response with a delay of 60 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        cy.synopsisRequest({
          url:'**/uploadfile/0',
          delaySeconds:60*5,
          message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
        })
      })
  
      it('Error message for synopsis/uploadfile/0 response with status code 500 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        cy.synopsisRequest({
          url:'**/uploadfile/0',
          status:500,
          message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
        })
      })
  
      it('Error message for synopsis/uploadfile/0 response with a delay of 60 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        cy.synopsisRequest({
          url:'**/uploadfile/0',
          delaySeconds:60*5,
          message:'Oops. Something went wrong Unable to display the Parallels screen'
        })
      })
  
      it('Error message for synopsis/uploadfile/0 response with status code 500 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        cy.synopsisRequest({
          url:'**/uploadfile/0',
          status:500,
          message:'Oops. Something went wrong Unable to display the Parallels screen'
        })
      })
  
      it('Error message for synopsis/uploadfile/synopsisFilename response with a delay of 60 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        cy.synopsisRequest({
          url:/^((?!(uploadfile\/0)).)*$/,
          delaySeconds:60*5,
          message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
        })
      })
  
      it('Error message for synopsis/uploadfile/synopsisFilename response with status code 500 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        if(urlKey=='live'){
          cy.synopsisRequest({
            url:/^((?!(uploadfile\/0)).)*$/,
            status:500,
            message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
          })
        }
      })
  
      it('Error message for synopsis/uploadfile/synopsisFilename response with a delay of 60 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        cy.synopsisRequest({
          url:/^((?!(uploadfile\/0)).)*$/,
          delaySeconds:60*5,
          message:'Oops. Something went wrong Unable to display the Parallels screen'
        })
      })
  
      it('Error message for synopsis/uploadfile/synopsisFilename response with status code 500 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        if(urlKey=='live'){
          cy.synopsisRequest({
            url:/^((?!(uploadfile\/0)).)*$/,
            status:500,
            message:'Oops. Something went wrong Unable to display the Parallels screen'
          })
        }
      })
  
      it('Error message for synopsis/synopsisFilename response with a delay of 60 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        cy.synopsisRequest({
          url:/^((?!(uploadfile)).)*$/,
          delaySeconds:60*5,
          message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
        })
      })
  
      it('Error message for synopsis/synopsisFilename response with status code 500 second when clicking the run button'+
      ' of search page in hebrew mode',()=>{
        cy.setLanguageMode({
          language:'Hebrew'
        })
        cy.synopsisRequest({
          url:/^((?!(uploadfile)).)*$/,
          status:500,
          message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
        })
      })
  
      it('Error message for synopsis/synopsisFilename response with a delay of 60 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        cy.synopsisRequest({
          url:/^((?!(uploadfile)).)*$/,
          delaySeconds:60*5,
          message:'Oops. Something went wrong Unable to display the Parallels screen'
        })
      })
  
      it('Error message for synopsis/synopsisFilename response with status code 500 second when clicking the run button'+
      ' of search page in english mode',()=>{
        cy.setLanguageMode({
          language:'English'
        })
        cy.synopsisRequest({
          url:/^((?!(uploadfile)).)*$/,
          status:500,
          message:'Oops. Something went wrong Unable to display the Parallels screen'
        })
      })
  
  
    })    
  })
})

