/// <reference types="cypress"/>

var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
});

    it('Deve completar o Pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        /*cy.get('#reg_email').type('larissapf3@teste.com.br')*/
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Teste')
        cy.get('#account_last_name').type('Testando')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});