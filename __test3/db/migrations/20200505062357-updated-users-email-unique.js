'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        // queryInterface.addIndex('Users', {
        //   fields: ['email'],
        //   unique: true,
        //   transaction: t
        // }),
        queryInterface.addConstraint('Users', {
          fields: ['email'],
          type: 'unique',
          name: 'custom_constraint_email_unique'
        })
      ]);
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.sequelize.transaction(t => {
     return Promise.all([
      // queryInterface.removeIndex('Users', 'email'),
      queryInterface.removeConstraint('Users', 'custom_constraint_email_unique'), 
     ]);
   })
  }
};
