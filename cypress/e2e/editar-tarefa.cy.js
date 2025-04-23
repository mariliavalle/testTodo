describe('Tarefas', () => {
    beforeEach (() => {
        cy.visit('https://example.cypress.io/todo')
      })

    it('Editar uma tarefa', () => {
        cy.get(':nth-child(1) > .view > label').dblclick();
        cy.get('.todo-list li.editing .edit').clear().type('Study cypress{enter}');
        cy.get('.todo-list li').first().should('contain.text', 'Study cypress');
    })
})