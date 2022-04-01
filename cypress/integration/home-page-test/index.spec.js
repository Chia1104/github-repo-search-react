describe('Test HomePage search function, and navigation', () => {
    cy.visit('/')

    it('Make sure searching without query string, and alert will show up', () => {
        cy.get('#searchBtn').click()
        cy.get('#alertLabel').should('contain', 'Search input can\'t be empty').and('be.visible')
    })

    it('Make sure searching function can run correctly', () => {
        cy.get('#searchInput').type('Dcard')
        cy.get('#alertLabel')
            .should('contain', 'Search input can\'t be empty')
            .and('not.be.visible')
        cy.get('#searchBtn').click()
        cy.url().should('include', 'Dcard')
    })

    it('Make sure Header show correct info', () => {
        cy.get('#mainTitle')
            .should('contain', 'Dcard')
            .and('be.visible')
            .trigger('mouseover')
        cy.get('#hoverLabel')
            .should('contain', 'View on GitHub')
            .and('be.visible')
        cy.get('#mainTitle').trigger('mouseout')
        cy.get('#hoverLabel')
            .should('contain', 'View on GitHub')
            .and('not.be.visible')
    })

    it('Make sure Header menu navigate to HomePage, and reset user state', () => {
        cy.get('#homeBtn')
            .click()
        cy.url().should('include', 'home')
        cy.get('#mainTitle').should('contain', 'GitHub Repo Search').and('be.visible')
    })
})
