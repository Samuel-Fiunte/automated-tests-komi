describe('Click arrow button and validate paging and data', () => {
  it('should validate paging and data', () => {
    cy.visit('https://testdummy.komi.io/');

    // Click on the button with the given xpath
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[6]/div[1]/div[1]/div/div[2]/button[2]')
    .click();

    // Check for the appearance of the new button
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[6]/div[1]/div[1]/div/div[2]/button[1]')
      .should('be.visible');

    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[6]/div[1]/div[1]/div/div[2]/button[2]')
      .click();
    // Check for the disabling of the arrow button
    cy.get('#\\30 a4b6f76-79a3-4f01-8505-2671d340d17a > div.my-swiper.false.multiple-row > div.p__b--20 > div > div.ant-col.btn-swiper__wrapper > button.swiper-button-disabled')
      .should('be.visible');

    // Check that the slider container has the correct data
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[6]/div[1]/div[2]/div[2]/div/div[5]')
    .within(() => {
      cy.get('.image-skeleton__image.thumb.isLoaded').should('be.visible');
      cy.get('.image-skeleton__image.original').should('be.visible');
      cy.get('audio').should('have.attr', 'src').and('not.be.empty');
    });
  });
});