'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tarefas', {
         id: Sequelize.INTEGER 
      });

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('tarefas');
    
  }
};
