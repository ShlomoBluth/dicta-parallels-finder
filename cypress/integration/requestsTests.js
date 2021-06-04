/// <reference types="cypress"/>

////run tests on requests from parallels finder run some in hebrew mode and english mode

let sizes = ['iphone-x',[1000, 660]]

sizes.forEach((size) => {

  describe('RequestsTest',()=>{

    
    beforeEach(() => {
      if (Cypress._.isArray(size)) {
        Cypress.config({
          viewportWidth: size[0],
          viewportHeight: size[1]
        })
        cy.viewport(size[0], size[1])
      } else {
        Cypress.config({
          viewportWidth: 375,
          viewportHeight: 812
        })
        cy.viewport(size)
      }
      cy.visit('https://parallels-finder.netlify.app/')
    })
  
  
    
  
    it('Error message for parallels/api response with a delay of 60 second when clicking the run button'+
    ' of search page in hebrew mode',()=>{
      cy.setLanguageMode('Hebrew')
      cy.parallelsFinderRequest({
        url:'/parallels/api/**',
        delaySeconds:60*5,
        message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
      })
    })

    it('Error message for parallels/api response with status code 500 second when clicking the run button'+
    ' of search page in hebrew mode',()=>{
      cy.setLanguageMode('Hebrew')
      cy.parallelsFinderRequest({
        url:'/parallels/api/**',
        status:500,
        message:'אופס יש לנו בעיה לא ניתן להציג את החלון להשוואת גרסאות'
      })
    })

    it('Error message for parallels/api response with a delay of 60 second when clicking the run button'+
    ' of search page in english mode',()=>{
      cy.setLanguageMode('English')
      cy.parallelsFinderRequest({
        url:'/parallels/api/**',
        delaySeconds:60*5,
        message:'Oops. Something went wrong Unable to display the Parallels screen'
      })
    })

    it('Error message for parallels/api response with status code 500 second when clicking the run button'+
    ' of search page in english mode',()=>{
      cy.setLanguageMode('English')
      cy.parallelsFinderRequest({
        url:'/parallels/api/**',
        status:500,
        message:'Oops. Something went wrong Unable to display the Parallels screen'
      })
    })
  
    
  
      
  
      
      
  })

})

