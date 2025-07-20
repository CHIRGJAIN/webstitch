describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the main navigation', () => {
    cy.get('nav').should('be.visible')
    cy.contains('Webstitch').should('be.visible')
    cy.contains('Home').should('be.visible')
    cy.contains('About').should('be.visible')
    cy.contains('Services').should('be.visible')
    cy.contains('Portfolio').should('be.visible')
    cy.contains('Blog').should('be.visible')
    cy.contains('Contact').should('be.visible')
  })

  it('should display the hero section', () => {
    cy.contains('Transform Your').should('be.visible')
    cy.contains('Digital Presence').should('be.visible')
    cy.contains('with Webstitch').should('be.visible')
    cy.contains('Start Your Project').should('be.visible')
    cy.contains('Watch Our Story').should('be.visible')
  })

  it('should display statistics', () => {
    cy.contains('580+').should('be.visible')
    cy.contains('450+').should('be.visible')
    cy.contains('7+').should('be.visible')
    cy.contains('15+').should('be.visible')
  })

  it('should display services section', () => {
    cy.contains('Our Services').should('be.visible')
    cy.contains('Web Development').should('be.visible')
    cy.contains('Mobile App Development').should('be.visible')
    cy.contains('UI/UX Design').should('be.visible')
  })

  it('should have working CTA buttons', () => {
    cy.contains('Start Your Project').should('have.attr', 'href', '/contact')
    cy.contains('Get Started Today').should('have.attr', 'href', '/contact')
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-x')
    cy.get('nav').should('be.visible')
    cy.contains('Transform Your').should('be.visible')
    
    // Test mobile menu
    cy.get('[data-testid="mobile-menu-button"]').should('be.visible')
  })

  it('should have proper meta tags for SEO', () => {
    cy.get('head title').should('contain', 'Webstitch')
    cy.get('head meta[name="description"]').should('have.attr', 'content')
    cy.get('head meta[property="og:title"]').should('exist')
    cy.get('head meta[property="og:description"]').should('exist')
  })

  it('should load without accessibility violations', () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})