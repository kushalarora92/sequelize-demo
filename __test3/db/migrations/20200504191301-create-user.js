'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Users');
  }
};
/** OUTPUT ===>

CREATE TABLE public."Users"
(
  id integer NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
  "firstName" character varying(255) COLLATE pg_catalog."default",
  "lastName" character varying(255) COLLATE pg_catalog."default",
  email character varying(255) COLLATE pg_catalog."default",
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT "Users_pkey" PRIMARY KEY (id)
)

 */