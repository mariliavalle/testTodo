import { tarefas } from "../fixtures/tarefas.json";

describe('Massa de dados', () => {
    before(() => {
      cy.visit('https://example.cypress.io/todo')
    });

    it('Adicionar tarefas através de massa de dados', () => {
        tarefas.forEach(task => {
            cy.addTask(task.tarefa);
            cy.get('.todo-list li').last().should('contain.text', task.tarefa);
        });
    });
});