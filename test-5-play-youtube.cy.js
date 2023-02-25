describe('Navigate to Youtube video', () => {
  it('assert it redirects correctly', () => {
    cy.visit('https://testdummy.komi.io/');

    // Click on the Youtube video
    cy.xpath('/html/body/div[1]/div[1]/section/section/div/div/div[1]/div[11]/div[1]/div[2]/div').click();
    // Assert that the youtube video is playing (This is different than asserting the redirection, but for the life of me
    // I haven't been able to see any changes to the video URL itself so this is the closest I got to the requested test)
    cy.xpath('/html/body/div/div[1]/section/section/div/div/div[1]/div[11]/div[1]/div[2]/div/div/div/div')
    .should('not.have.class', 'youtube-player__overlay');
      });
    });