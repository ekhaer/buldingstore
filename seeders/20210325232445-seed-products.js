'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Products', [
     {
       prooductName: 'Gergaji',
       price: 55000,
       stock: 35,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      prooductName: 'Plavon',
      price: 125000,
      stock: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Wastafel',
      price: 455000,
      stock: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Cat',
      price: 65000,
      stock: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Keramik',
      price: 120000,
      stock: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Marmer',
      price: 230000,
      stock: 65,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Bath Tube',
      price: 3500000,
      stock: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Semen',
      price: 85000,
      stock: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Palu',
      price: 35000,
      stock: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      prooductName: 'Paku',
      price: 32000,
      stock: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
