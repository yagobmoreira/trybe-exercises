"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        title: "Christine",
        author: "Stephen King",
        pageQuantity: 616,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Apanhador de Sonhos",
        author: "Stephen King",
        pageQuantity: 656,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "A Dança da Morte",
        author: "Stephen King",
        pageQuantity: 1248,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  },
};
