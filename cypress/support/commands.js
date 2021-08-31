
import 'cypress-file-upload';

// Cypress.Commands.add('setLanguageMode',(language)=>{
//   cy.get('body').then(elem => {
//     let languageMode
//     if(language=='Hebrew'){
//       languageMode='he'
//     }else if(language=='English'){
//       languageMode=''
//     }
//     let classAttr
//     if(elem.attr("class").substring(elem.attr("class").length-2,
//     elem.attr("class").length)=='he'||elem.attr("class").substring(0,2)=='he'){
//       classAttr='he'
//     }else{
//       classAttr=''  
//     }
//     if(classAttr!=languageMode)
//     {
//       cy.log(classAttr+' classAttr '+languageMode+' languageMode')
//       cy.get('a').contains(/^עברית$|^English$/g).click({force:true});
//     }
//     if(languageMode=='he'){
//       cy.get('a').contains(/^English$/).should('exist')
//     } else{
//       cy.get('a').contains(/^עברית$/).should('exist')
//     }
//   })
// })

Cypress.Commands.add('parallelsFinderRun',({file,text=''})=>{
  if(text.length>0){
    cy.get('textarea[id="textEntryArea"]').type(text)
  }else{
    cy.get('input[type="file"]').attachFile(file)
  }
  cy.get('[id="del-btn"]',{timeout:20000}).should('exist')
  cy.get('button').contains(/מצא מקבילות|Find Parallels/).click({force:true})
})

Cypress.Commands.add('parallelsFinderRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept(url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.parallelsFinderRun({file:'tuvtaamvadaat-014.txt'})
  
  if(delaySeconds>0){
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
    
  if(message.length>0){
    cy.get('div[id*=server-failed-modal]').should('be.visible') 
    cy.contains(message).should('exist')
  } 
})

Cypress.Commands.add('synopsisRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.parallelsFinderRun({file:'הריסות ביתרמאת קלמן שולמןמבוא.txt'})
  cy.url({timeout:120000}).should('eq','https://parallels-finder.netlify.app/results')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.intercept(url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.get('span[class="border-bottom"]').contains(/השוואת גרסאות|View synopsis/).first().click({force:true})

  if(delaySeconds>0){
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
      
  if(message.length>0){
    cy.get('div[id*=server-failed-modal]',{timeout:10000}).should('be.visible') 
    cy.contains(message).should('exist')
  } 
})

Cypress.Commands.add('waitForResultsPage',()=>{
  cy.url({timeout:120000}).should('eq','https://parallels-finder.netlify.app/results')
})

Cypress.Commands.add('allParallelsExistInTheText',()=>{
  let textField
  cy.get('div[class*="searched-text"]').then(text=>{
    textField=text.text()
  }).then(()=>{
    cy.get('div[id="scrollable-area"]').children().each(parallel=>{
      if(!parallel.attr('class').includes('flex-row-reverse')){
        cy.parallelExistInTheText({
          text:textField,
          parallel:parallel
        })
      }
    })
  })
})

Cypress.Commands.add('parallelExistInTheText',({text,parallel})=>{
  let num
  let numIndex
  let quote=''
  cy.get(parallel).within(()=>{
    cy.get('small[class*="footnote-num"]').first().then(n=>{
      //num=n.text()
      cy.skipNumbersInText(n.text()).then(numSkip=>{
        num=numSkip
      })
      num=parseInt(n.text().replace(/\D/g, ""))
      numIndex=text.indexOf(n.text())
    })
    cy.get('[class*="text-muted"]').first().within(()=>{
      cy.get('span').each(word=>{
        quote+=(word.text().replaceAll(/(\n| )/g,''))+' '
      })
    }).then(()=>{
      expect(quote.substring(0,quote.length-1)).eq((text.replaceAll(/\[[0-9]*\]/g,''))
      .substring(numIndex-num-quote.length+1,numIndex-num))
    })
  })
})

Cypress.Commands.add('skipNumbersInText',(num)=>{
  let numSkip=0
  let n=parseInt(num.replace(/\D/g, ""))
  for(let i=1;i<n;i++){
    numSkip+=i.toString().length+2
  }
  return numSkip
})

Cypress.Commands.add('getSegmentParallelsSources',(segmentGroup)=>{
  let sources=[]
  cy.get(segmentGroup).within(()=>{
    cy.get('[class*="f-narkis"]').siblings('small').each(source=>{
      sources.push(source.text().replaceAll(':','').replaceAll('\n','').replaceAll(/( )/g,'').trim())
    })
  }).then(()=>{
    return sources
  })
})

Cypress.Commands.add('getSegmentSynopsisSources',()=>{
  let sources=[]
  cy.get('tr[class*="first-row"]').within(()=>{
    cy.get('th').not('[class="first-col"]').next().each(source=>{
      sources.push(source.text().replaceAll('%22','"').replaceAll(/(\n)/g,'')
      .replaceAll(/( )/g,'').trim())
    })
  }).then(()=>{
    return sources
  })
})