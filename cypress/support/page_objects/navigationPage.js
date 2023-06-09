function selectGroupMenuItem(groupName){
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if(attr.includes('left')){
                cy.wrap(menu).click({ force: true})
            }
        })
    })

}

export class NavigationPage{
    formLayoutsPage(){
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click({force: true})
    }

    datepickerPage(){
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click({force: true})
        cy.contains('Datepicker').click({force: true})
    }

    smartTablePage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }

    tooltipPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }
} 

export const navigateTo = new NavigationPage()