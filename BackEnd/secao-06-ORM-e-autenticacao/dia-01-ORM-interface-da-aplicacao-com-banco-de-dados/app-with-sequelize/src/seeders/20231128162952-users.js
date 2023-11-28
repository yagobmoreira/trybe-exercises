"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Leonardo",
          email: "leo@teste.com",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          phoneNum: '123456789'
        },
        {
          fullName: "JEduardo",
          email: "edu@test.com",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          phoneNum: '987654321'
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Users", null, {});
  },
};
