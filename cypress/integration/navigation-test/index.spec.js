describe('Test Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Make sure the default URL redirects to HomePage', () => {
        cy.url().should('include', 'home')
        cy.get('#mainTitle').should('contain', 'GitHub Repo Search').and('be.visible')
    })

    it('Make sure enter wrong URL can direct to NotFoundPage', () => {
        cy.visit('/notfound')
        cy.get('#notFoundPageMsg').should('contain', 'There is nothing here').and('be.visible')
    })

    it('Make sure search the user does not exist, can direct to NotFoundPage', () => {
        cy.get('#searchInput').type('undefinuser')
        cy.get('#searchBtn').click()
        cy.get('#notFoundPageMsg').should('contain', 'There is nothing here').and('be.visible')
    })
})
