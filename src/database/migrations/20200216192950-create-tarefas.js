'use strict';

/**
 * Criar uma tabela tarefa com os seguintes campos:
 * "descrição", a "data de criação" e um "status" que pode variar entre "pendente", "andamento" e "concluida"
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tarefas', {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true 
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at : {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:  {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('tarefas');
    
  }
};
