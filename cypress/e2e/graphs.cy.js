describe('Graphs page', () => {
  beforeEach(() => {
    // Intercept API requests and allow them
    cy.intercept('GET', '**/fiscalSummary').as('getFiscal');
    cy.intercept('GET', '**/citizenshipSummary').as('getCitizen');
    cy.visit('/graphs');
    cy.wait('@getFiscal');
    cy.wait('@getCitizen');
  });

  // Switches chart views using buttons and checks disabled/enabled state
  it('should switch charts using buttons and check disabled/enabled state', () => {
    // By default, "Time Series" is active
    cy.get('.scatter-plot').should('be.disabled');
    cy.get('.heat-map').should('not.be.disabled');
    cy.get('.choropleth-map').should('not.be.disabled');

    // Switch to Heat Map
    cy.get('.heat-map').click();
    cy.get('.heat-map').should('be.disabled');
    cy.get('.scatter-plot').should('not.be.disabled');
    cy.get('.choropleth-map').should('not.be.disabled');

    // Switch to Choropleth
    cy.get('.choropleth-map').click();
    cy.get('.choropleth-map').should('be.disabled');
    cy.get('.scatter-plot').should('not.be.disabled');
    cy.get('.heat-map').should('not.be.disabled');

    // And back to Time Series
    cy.get('.scatter-plot').click();
    cy.get('.scatter-plot').should('be.disabled');
    cy.get('.heat-map').should('not.be.disabled');
    cy.get('.choropleth-map').should('not.be.disabled');
  });

  // Shows loader when data is loading
  it('should show loader while data is loading', () => {
    // Force loading state
    cy.window().then(win => {
      win.__REACT_DEVTOOLS_GLOBAL_HOOK__ = undefined;
    });
    cy.contains('Update Query').click();
    cy.get('.text-amber-50').contains('Loading');
  });

  // Fetches new data and shows loader after clicking Update Query
  it('should fetch new data and show loader after clicking Update Query', () => {
    cy.contains('Update Query').click();
    cy.get('.text-amber-50').contains('Loading');
    cy.wait('@getFiscal');
    cy.wait('@getCitizen');
    // Loader should disappear after data loads
    cy.get('.text-amber-50').should('not.contain', 'Loading');
  });

  // Clears data after clicking Clear Query
  it('should clear data after clicking Clear Query', () => {
    cy.contains('Clear Query').click();
    cy.get('.maps').should('contain.text', 'Brak danych');
  });

  // Changes header title when changing chart view
  it('should change header title when switching chart view', () => {
    // 1. Time Series
    cy.get('h1').invoke('text').should('include', 'Showing: Times series data for all USCIS Asylum Offices');

    // 2. Heat Map
    cy.contains('USCIS Asylum Offices Heat Map').click();
    cy.get('h1').invoke('text').should('include', "Rates of 'granted' case decisions by asylum office");

    // 3. Citizenship
    cy.contains('Citizenship of Asylum Seeker').click();
    cy.get('h1')
      .invoke('text')
      .then(text => {
        expect(text.toLowerCase()).to.include('nationality of origin');
      });
  });
});
