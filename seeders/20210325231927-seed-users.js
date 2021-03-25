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
   return queryInterface.bulkInsert('Users', [
     {
       username: 'teddy-tama',
       password: 'teddytama13',
       email: 'teddytama@mail.com',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      username: 'emilia-nissa',
      password: 'emilia97',
      email: 'emilianissa@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'ukiucup',
      password: 'ukiucup09',
      email: 'ukiucup@mail.com',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
