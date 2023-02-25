describe('Click Pre-save to change it to Pre-saved', () => {
  it('should Pre-save item and change text to Pre-saved', () => {
    cy.visit('https://testdummy.komi.io/');

    // Click on the button with the given text
    const buttonText = 'Pre-save';
    cy.xpath('/html/body/div/div[1]/section/section/div/div/div[1]/div[7]/div[1]/div[2]/div/div/div/div/div[2]/div/div[2]/button/span')
    .contains(buttonText).click();

    // Doing the Spotify login journey
    // This requires you to enter the email address variable
    cy.xpath('./html/body/div[1]/div/div[2]/div/div/div[1]/div[1]/input').type('email address');
    // This requires you to enter the your password variable
    cy.xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div[2]/input').type('your password');
    cy.xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div[3]/div[2]/button/span[1]').click();
    cy.xpath('/html/body/div/div/div[2]/div/div/div[3]/button/div[1]').click();

    // Close popup
    cy.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/div[2]/form/div/button').click();

    // Checks text change
    const buttonText1 = 'Pre-saved';
    cy.xpath('/html/body/div[1]/div[1]/section/section/div/div/div[1]/div[7]/div[1]/div[2]/div/div/div/div/div[2]/div/div[2]/button/span')
    .contains(buttonText1);
  });
});