describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // Checks if all main buttons are visible on the page
  it('should render all main buttons', () => {
    cy.contains('View The Data').should('be.visible');
    cy.contains('Download The Data').should('be.visible');
    cy.contains('Read More').should('be.visible');
    cy.contains('Back To Top').should('be.visible');
  });

  // Checks if "View The Data" button navigates to /graphs
  it('should navigate to /graphs when clicking "View The Data"', () => {
    cy.contains('View The Data').click();
    cy.url().should('include', '/graphs');
  });

  // Checks if "Download The Data" triggers API request
  it('should trigger API request when clicking "Download The Data"', () => {
    cy.intercept('GET', '**/download*').as('download');
    cy.contains('Download The Data').click();
  });

  // Checks if "Read More" button scrolls or reveals more text
  it('should scroll or show additional text when clicking "Read More"', () => {
    cy.contains('Read More').click();
  });

  // Checks if "Back To Top" button scrolls the page to the top
  it('should scroll to top when clicking "Back To Top"', () => {
    cy.scrollTo('bottom');
    cy.contains('Back To Top').click();
    cy.window().its('scrollY').should('equal', 0);
  });
});
