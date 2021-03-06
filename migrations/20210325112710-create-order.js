'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Users',
            key: 'id'
          }
        },
        onUpdate: 'CASCADE',
        onDELETE: 'CASCADE',
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Products',
            key: 'id'
          }
        },
        onUpdate: 'CASCADE',
        onDELETE: 'CASCADE',
      },
      qty: {
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};