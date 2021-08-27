/// <reference types="cypress"/>

////run parallels-finder-tests run some in hebrew mode and english mode

let sizes = ['iphone-x',[1000, 660]]//'iphone-x',

sizes.forEach((size) => {

  describe('parallels-finder-tests',()=>{

    
    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'/'})
      cy.wrap(5).eq(8)
    })

    it('The text in the file has been uploaded',()=>{
      let fileText
      cy.setLanguageMode({
        language:'Hebrew'
      })
      cy.parallelsFinderRun({file:'tuvtaamvadaat-014.txt'})
      cy.get('textarea[id="textEntryArea"]').then(textareaVal=>{
        cy.readFile('cypress/fixtures/tuvtaamvadaat-014.txt').then(text=>{
          fileText=text
        }).then(()=>{
          expect(textareaVal.val()).eq(fileText)
        })
      })
    })

    // it('Text in results page equivalent to uploaded text',()=>{
    //   let fileText
    //   cy.setLanguageMode({
    //     language:'Hebrew'
    //   })
    //   cy.get('input[type="file"]').attachFile('tuvtaamvadaat-014.txt')
    //   cy.get('[id="del-btn"]',{timeout:20000}).should('exist')
    //   cy.get('textarea[id="textEntryArea"]').then(textareaVal=>{
    //     fileText=textareaVal.val()
    //   })
    //   cy.get('button').contains(/מצא מקבילות|Find Parallels/).click({force:true})
    //   cy.waitForResultsPage()
    //   cy.get('div[class*="searched-text"]').then(text=>{
    //     expect(fileText).eq(text.text().replaceAll(/\[[0-9]*\]/g,''))
    //   })
    // })

    // it('All parallels exist in the text',()=>{
    //   cy.setLanguageMode({
    //     language:'Hebrew'
    //   })
    //   cy.parallelsFinderRun({file:'tuvtaamvadaat-014.txt'})
    //   //cy.get('button').contains(/מצא הקבלות|Find Parallels/).click({force:true})
    //   cy.waitForResultsPage()
    //   cy.allParallelsExistInTheText()
    // })

    // it('Sources in synopsis',()=>{
    //   cy.setLanguageMode({
    //     language:'Hebrew'
    //   })
    //   cy.parallelsFinderRun({file:'tuvtaamvadaat-014.txt'})
    //   //cy.get('button').contains(/מצא הקבלות|Find Parallels/).click({force:true})
    //   cy.waitForResultsPage()
    //   cy.get('[class*="p-group"]').each(group=>{
    //     let sources=[]
    //     let synopsisSources=[]
    //     cy.getSegmentParallelsSources(group).then(segmentParallelsSources=>{
    //       sources=segmentParallelsSources
    //     }).then(()=>{
    //       cy.get(group).within(gr=>{
    //         if(gr.find('button').length>0){
    //           cy.get('button').contains(/השוואת גרסאות/).click({force:true})
    //           cy.document().its('body').within(()=>{
    //             cy.get('[class*="spinner"]',{timeout:30000}).should('not.exist')
    //             cy.get('table').contains('טקסט מקור',{timeout:20000}).should('exist').and('be.visible')
    //             cy.getSegmentSynopsisSources().then(segmentSynopsisSources=>{
    //               synopsisSources=segmentSynopsisSources
    //             }).then(()=>{
    //               function removeParallels(sources,synopsisSources){
    //                 if(sources.length==0){
    //                   cy.wrap(synopsisSources.length).should('eq',0)
    //                   return true
    //                 }
    //                 expect(synopsisSources[synopsisSources.indexOf(sources[0])]).eq(sources[0])
    //                 synopsisSources.splice(synopsisSources.indexOf(sources[0]),1)
    //                 sources.splice(0,1)
    //                 removeParallels(sources,synopsisSources)
    //               }
    //               removeParallels(sources,synopsisSources)
    //             }).then(()=>{
    //               cy.get('button').contains(/סגור/).click({force:true}).then(()=>{
    //                 cy.get('table').should('not.exist')
    //               })
    //             })
    //           })
    //         }
    //       })
    //     })
    //   })
    // })

    // it('All versions are equal',()=>{
    //   cy.setLanguageMode({
    //     language:'Hebrew'
    //   })
    //   cy.parallelsFinderRun({file:'tuvtaamvadaat-014.txt'})
    //   //cy.get('button').contains(/מצא הקבלות|Find Parallels/).click({force:true})
    //   cy.waitForResultsPage()
    //   cy.get('[class*="p-group"]').each(group=>{
    //     cy.get(group).within(gr=>{
    //       if(gr.find('button').length==0){
    //         let quote=''
    //         cy.get('[class*="text-muted"]').first().within(()=>{
    //           cy.get('span').each(word=>{
    //             quote+=(word.text().replaceAll(/(\n| )/g,''))+' '
    //           })
    //         }).then(()=>{
    //           cy.get('b').then(bold=>{
    //             expect(bold.text()).eq(quote.trim())
    //           })
    //         })
    //       }
    //     })
    //   })
    // })

    // it('The parallel result numbers are correct',()=>{
    //   cy.setLanguageMode({
    //     language:'Hebrew'
    //   })
    //   cy.parallelsFinderRun({file:'tuvtaamvadaat-014.txt'})
    //   //cy.get('button').contains(/מצא הקבלות|Find Parallels/).click({force:true})
    //   cy.waitForResultsPage()
    //   cy.get('[class*="p-group"]').each(group=>{
    //     cy.get(group).within(()=>{
    //       let num
    //       cy.get('[class*="results-num"]').then(numText=>{
    //         num=parseInt(numText.text().replace(/\D/g, ""))
    //       }).then(()=>{
    //         cy.get('[class*="item-wrap"]').then(items=>{
    //           cy.wrap(items.length).should('eq',num)
    //         })
    //       })
    //     })
    //   })
    // })


  })
})