describe('Tarefas', () => {
  beforeEach (() => {
    cy.visit('https://example.cypress.io/todo')
  })
  
  it('Excluir uma tarefa da lista', () => {
    cy.get('.todo-list li').first().trigger('mouseover').find('.destroy').click({force: true});
    cy.get('span.todo-count').should('be.visible', 'contain.text', '1 item left');
  })


})