describe('Images', () => {
  it('should be loaded', () => {
    cy.visit('https://testdummy.komi.io/');

    // Check that all thumbnails are loaded
    cy.get('.image-skeleton__image.thumb').each((image) => {
      cy.wrap(image)
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  });
});
