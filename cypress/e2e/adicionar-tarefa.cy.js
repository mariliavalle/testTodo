describe('Tarefas', () => {
    beforeEach (() => {
      cy.visit('https://example.cypress.io/todo')
    })

    it ('Adicionar tarefa na lista', () => {
      cy.get('[data-test="new-todo"]').type('Study Cypress{enter}');
      cy.get('.todo-list li').last().should('contain.text', 'Study Cypress');
    })
  })