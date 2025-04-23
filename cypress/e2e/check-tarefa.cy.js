describe('Tarefas', () => {
  beforeEach (() => {
    cy.visit('https://example.cypress.io/todo')
  })
    
  it ('Dar um check em uma das tarefas da lista', () => {
    cy.get(':nth-child(2) > .view > .toggle').click();
    cy.get('span.todo-count').should('be.visible', 'contain.text', '1 item left');
  })
  
})