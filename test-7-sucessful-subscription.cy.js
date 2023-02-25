    describe('Navigate to Subscription', () => {
      it('fill in the form correctly', () => {
        cy.visit('https://testdummy.komi.io/');
    
        const buttonText4 = 'Submit';
        // Click on Subscription Module
        cy.xpath('/html/body/div/div/section/section/div/div/div[1]/div[8]/div[2]/div/div').click();

        // Fill in the form sucessfully
        cy.get('#INPUT').type(`samuel fiunte`);
        cy.get('#EMAIL_ADDRESS').type(`samuel.fiunte@gmail.com`);
        cy.get('.ant-btn-primary.ant-btn-block').contains(buttonText4).click({force: true});
        cy.get('div > div').should('be.visible');
      });
    });
    