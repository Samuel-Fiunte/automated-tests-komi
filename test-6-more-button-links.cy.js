describe('Navigate to More in Single Music', () => {
  it('should verify all links', () => {
    cy.visit('https://testdummy.komi.io/');

    const buttonText3 = 'More';
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[5]/div[1]/div[2]/div/div/div/div/div[2]/div[5]/button')
    .contains(buttonText3).click();

    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open', (url) => {
        // Change window location to be same as the popup url
        win.location.href = url;
      }).as('popup'); // Alias it with popup, so we can refer to it with @popup
    });

    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]')
      .click();

    // Make sure that window.open function call is triggered
    cy.get('@popup').should('be.called');

    // Assert that the URL accessed via the stub is correct
    cy.get('@popup').should('be.calledWith', 'https://open.spotify.com/track/57f2cCxf67aA6BtD6Y8wbR');

    // Repeat the previous test but for Apple Music
    cy.visit('https://testdummy.komi.io/'); 
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[5]/div[1]/div[2]/div/div/div/div/div[2]/div[5]/button')
      .contains(buttonText3).click();
    cy.window().then((win) => {
        cy.stub(win, 'open', (url) => {
          win.location.href = url;
        }).as('popup');
      });
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div[2]/div/div[2]/div[2]')
    .click();
    cy.get('@popup').should('be.called');
    cy.get('@popup').should('be.calledWith', 'https://music.apple.com/us/album/silberfisch/493121061?i=493121477');

    // Repeat the previous test but for Youtube Music
    cy.visit('https://testdummy.komi.io/');
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[5]/div[1]/div[2]/div/div/div/div/div[2]/div[5]/button')
      .contains(buttonText3).click();
    cy.window().then((win) => {
        cy.stub(win, 'open', (url) => {
          win.location.href = url;
        }).as('popup');
      });
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div[2]/div/div[3]/div[2]')
    .click();
    cy.get('@popup').should('be.called');
    cy.get('@popup').should('be.calledWith', 'https://music.youtube.com/watch?v=XckgU_MurkU');

     // Repeat the previous test but for Deezer
     cy.visit('https://testdummy.komi.io/');
     cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[5]/div[1]/div[2]/div/div/div/div/div[2]/div[5]/button')
       .contains(buttonText3).click();
     cy.window().then((win) => {
         cy.stub(win, 'open', (url) => {
           win.location.href = url;
         }).as('popup');
       });
     cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div[2]/div/div[4]/div[2]').click();
     //cy.xpath('/html/body/div[4]/div/div/div/div[2]/div[1]/button').click();
     cy.get('@popup').should('be.called');
     cy.get('@popup').should('be.calledWith', 'https://www.deezer.com/track/16097367', '_blank');

     cy.visit('https://testdummy.komi.io/');
  });
});