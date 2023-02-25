describe('Navigate to Single Music section', () => {
  it('should navigate to the correct section', () => {
    cy.visit('https://testdummy.komi.io/');

    // Click on the button with the given text
    const buttonText = 'Single Music';
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[3]/div/div/div/div[1]/button/span')
    .contains(buttonText).click();

    // Wait for the section to become visible
    cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[5]/div[1]/div[1]/div/div/div/div').should('be.visible');
  });
});