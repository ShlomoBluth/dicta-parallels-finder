
Cypress.Commands.add('setLanguageMode',(language)=>{
    cy.get('body').then(elem => {
      let languageMode
      if(language=='Hebrew'){
        languageMode='he'
      }else if(language=='English'){
        languageMode=''
      }
      let classAttr
      if(elem.attr("class").substring(elem.attr("class").length-2,
      elem.attr("class").length)=='he'||elem.attr("class").substring(0,2)=='he'){
        classAttr='he'
      }else{
        classAttr=''  
      }
      if(classAttr!=languageMode)
      {
        cy.log(classAttr+' classAttr '+languageMode+' languageMode')
        cy.get('a').contains(/^עברית$|^English$/g).click();
      }
      if(languageMode=='he'){
        cy.get('a').contains(/^English$/).should('exist')
      } else{
        cy.get('a').contains(/^עברית$/).should('exist')
      }
    })
})

Cypress.Commands.add('parallelsFinder',(text)=>{
    cy.get('textarea[id="textEntryArea"]').type(text)
    cy.get('button').contains(/מצא הקבלות|Find Parallels/).click({force:true})
})

Cypress.Commands.add('parallelsFinderRequest',({url,status=200,message='',delaySeconds=0})=>{
    cy.intercept(url, {
        delayMs:1000*delaySeconds,
        statusCode: status
    },)
    if(message.length>0){
      cy.contains(message).should('not.exist')
    }
    cy.parallelsFinder('משה קבל תורה')
  
    if(delaySeconds>0){
      cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
    }
    
    if(message.length>0){
        cy.get('div[id*=server-failed-modal]').should('be.visible') 
        cy.contains(message).should('exist')
    } 
  })