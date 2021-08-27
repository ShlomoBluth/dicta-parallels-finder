/// <reference types="cypress"/>

////run tests on requests from parallels finder run some in hebrew mode and english mode

let sizes = ['iphone-x',[1000, 660]]//'iphone-x',

sizes.forEach((size) => {

  describe('RequestsTest',()=>{

    
    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'/'})
    })
  
  
    
  
    it('Error message for parallels/api response with a delay of 60 second when clicking the run button'+
    ' of search page in hebrew mode',()=>{
      cy.setLanguageMode({
        language:'Hebrew'
      })
      cy.parallelsFinderRequest({
        url:'/parallels/api/**',
        delaySeconds:60*5,
        message:'אופס יש לנו בעיה יש להזין טקסט יותר קצר'
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
        message:'Oops. Something went wrong Please upload a shorter text.'
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
      cy.synopsisRequest({
        url:/^((?!(uploadfile\/0)).)*$/,
        status:500,
        message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
      })
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
      cy.synopsisRequest({
        url:/^((?!(uploadfile\/0)).)*$/,
        status:500,
        message:'Oops. Something went wrong Unable to display the Parallels screen'
      })
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

