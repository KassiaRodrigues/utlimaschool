
import LoginElements from "../elements/loginElements";
const loginElements = new LoginElements

//FUNÇOES DO CUCUMBER PROCESSOR

Given('o aluno esteja na pagina inicial da ultima',()=>{
    cy.visit('https://ultima.school/');
})

When('clicar em Login',()=>{
    cy.xpath(LoginElements.menuIcon()).click();
    cy.xpath(LoginElements.menuLogin()).click();
})

Then('o sistema devera exibir os campos para logar',()=>{
    cy.xpath(LoginElements.inputEmail())
        .invoke('attr', 'placeholder')
        .should('eq','Email')

    cy.xpath(LoginElements.inputSenha())
        .invoke('attr', 'placeholder')
        .should('eq','Senha')

    cy.xpath(LoginElements.btnConectese())
        .invoke('attr', 'value')
        .should('eq','Conecte-se')
});
